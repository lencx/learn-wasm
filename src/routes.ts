import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    title: 'chasm',
    path: '/rsw/chasm',
    component: lazy(() => import('./views/chasm')),
    exact: true,
  },
  {
    title: 'game of life',
    path: '/rsw/game-of-life',
    component: lazy(() => import('./views/game_of_life')),
    exact: true,
  },
  {
    title: 'ffmpeg',
    path: '/ffmpeg',
    component: lazy(() => import('./views/ffmpeg')),
    exact: true,
  },
  {
    title: 'excel read',
    path: '/rsw/excel-read',
    component: lazy(() => import('./views/excel_read')),
    exact: true,
  },
  {
    path: '/',
    component: lazy(() => import('./views/home')),
  },
];

export default routes;