import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerRemotes } from '@module-federation/enhanced/runtime';
import './index.css';
import '@vritti/quantum-ui/dist/assets/quantum-ui.css';
import App from './App';
import { ALL_REMOTES } from './config/remotes.config';
import { loadRemoteCSSFromManifest } from './utils/loadRemoteCSS';

/**
 * Register all remote micro-frontends at startup
 * This allows the host to dynamically load routes from all remotes
 */
registerRemotes(
  ALL_REMOTES.map((remote) => ({
    name: remote.name,
    entry: remote.entry,
  })),
);

/**
 * Load CSS from all remote micro-frontends
 * This runs asynchronously and won't block the app
 */
setTimeout(async () => {
  for (const remote of ALL_REMOTES) {
    if (remote.baseUrl) {
      try {
        console.log(`[Bootstrap] Loading CSS for ${remote.name} from ${remote.baseUrl}`);
        await loadRemoteCSSFromManifest(remote.baseUrl, remote.name);
      } catch (err) {
        console.warn(`[Bootstrap] Failed to load CSS for ${remote.name}:`, err);
      }
    }
  }
}, 0);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
