import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// If use build plugin, you can use `registerRemotes` directly.
import { registerRemotes } from '@module-federation/enhanced/runtime';

registerRemotes([
  {
    name: 'VrittiAuth',
    entry: 'http://localhost:3001/mf-manifest.json',
  },
]);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
