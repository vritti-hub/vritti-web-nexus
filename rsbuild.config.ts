import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'vritti_host',
      remotes: {
        vritti_auth: 'vritti_auth@http://localhost:3001/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.0.0',
        },
        'react-router-dom': {
          singleton: true,
        },
        '@vritti/quantum-ui': {
          singleton: true,
          requiredVersion: '0.1.5',
        },
      },
    }),
  ],
});
