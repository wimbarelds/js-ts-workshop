import { createRootRoute, Layout, slidesToRoutes } from 'wb-slides';

import { slides } from './slides';

export const routes = [
  createRootRoute({
    LayoutComponent: Layout,
    children: slidesToRoutes(slides),
  }),
];
