/**
 * Utility to dynamically load CSS from remote micro-frontends
 * Handles duplicate loading prevention and error handling
 */

const loadedCSS = new Set<string>();

/**
 * Loads a CSS file from a remote URL by injecting a link tag
 * @param cssUrl - The full URL to the CSS file
 * @param remoteName - Name of the remote (for tracking)
 */
export const loadRemoteCSS = (cssUrl: string, remoteName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Skip if already loaded
    if (loadedCSS.has(cssUrl)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.dataset.remote = remoteName;

    link.onload = () => {
      loadedCSS.add(cssUrl);
      console.log(`[MF CSS] Loaded CSS for ${remoteName}: ${cssUrl}`);
      resolve();
    };

    link.onerror = () => {
      console.warn(`[MF CSS] Failed to load CSS for ${remoteName}: ${cssUrl}`);
      // Don't reject - CSS loading failure shouldn't break the app
      resolve();
    };

    document.head.appendChild(link);
  });
};

/**
 * Loads CSS from a remote's base URL by inferring the CSS file path
 * For Rsbuild Module Federation builds, CSS is typically at /static/css/index.[hash].css
 * @param baseUrl - The base URL of the remote (e.g., http://localhost:3001)
 * @param remoteName - Name of the remote
 */
export const loadRemoteCSSFromManifest = async (
  baseUrl: string,
  remoteName: string,
): Promise<void> => {
  try {
    // Fetch the manifest to get the exact CSS file path
    const manifestUrl = `${baseUrl}/mf-manifest.json`;
    const response = await fetch(manifestUrl);

    if (!response.ok) {
      console.warn(`[MF CSS] Could not fetch manifest for ${remoteName}`);
      return;
    }

    const manifest = await response.json();

    // Look for CSS assets in the manifest
    // Different Module Federation setups store CSS in different places
    const cssFiles: string[] = [];

    // Check exposes for CSS
    if (Array.isArray(manifest.exposes)) {
      for (const expose of manifest.exposes) {
        if (expose?.assets?.css) {
          if (expose.assets.css.sync) cssFiles.push(...expose.assets.css.sync);
          if (expose.assets.css.async) cssFiles.push(...expose.assets.css.async);
        }
      }
    }

    // Check shared for CSS
    if (Array.isArray(manifest.shared)) {
      for (const shared of manifest.shared) {
        if (shared?.assets?.css) {
          if (shared.assets.css.sync) cssFiles.push(...shared.assets.css.sync);
          if (shared.assets.css.async) cssFiles.push(...shared.assets.css.async);
        }
      }
    }

    // Load all found CSS files
    if (cssFiles.length > 0) {
      await Promise.all(
        cssFiles.map((cssFile) =>
          loadRemoteCSS(`${baseUrl}/${cssFile}`, remoteName),
        ),
      );
    } else {
      // Fallback: try common patterns if no CSS found in manifest
      console.log(`[MF CSS] No CSS found in manifest for ${remoteName}, trying fallback patterns`);

      // Try to load from static/css/index.css (common pattern)
      // This will fail gracefully if the file doesn't exist
      await loadRemoteCSS(`${baseUrl}/static/css/index.css`, remoteName);
    }
  } catch (error) {
    console.warn(`[MF CSS] Error loading CSS for ${remoteName}:`, error);
  }
};
