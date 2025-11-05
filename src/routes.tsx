import type { ReactNode } from 'react';

const subDomain = window.location.hostname.split('.')[0];

export const isCloud = subDomain === 'cloud';

export type Route = {
  path: string;
  component: ReactNode;
};

export const routes: Route[] = [];
if (isCloud) {
  routes.push({
    path: '/cloud',
    component: <>cloud</>,
  });
}
