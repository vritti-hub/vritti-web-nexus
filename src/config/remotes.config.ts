/**
 * Remote Module Federation Configuration
 *
 * This file defines all remote micro-frontends that will be loaded
 * by the host application. All remotes are loaded unconditionally at startup.
 */

export interface RemoteConfig {
  name: string;
  entry: string;
  exposedModule: string;
}

/**
 * Registry of all remote micro-frontends
 * Add new remotes here as they are developed
 */
export const ALL_REMOTES: RemoteConfig[] = [
  {
    name: 'VrittiAuth',
    entry: import.meta.env.VITE_VRITTI_AUTH_URL || 'http://localhost:3001/mf-manifest.json',
    exposedModule: 'routes',
  },
  // Add more remotes as needed:
  // {
  //   name: 'VrittiCloud',
  //   entry: import.meta.env.VITE_VRITTI_CLOUD_URL || 'http://localhost:3002/mf-manifest.json',
  //   exposedModule: 'routes',
  // },
];
