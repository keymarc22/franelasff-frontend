import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../views/admin/Dashboard')),
    exact: true
  },
  {
    path: '/shirts',
    component: lazy(() => import('../views/admin/Shirts')),
    exact: true
  },
  {
    path: '/catalogues',
    component: lazy(() => import('../views/admin/Catalogues')),
    exact: true
  },
  {
    path: '/sales',
    component: lazy(() => import('../views/admin/Sales')),
    exact: true
  },
  {
    path: '/settings',
    component: lazy(() => import('../views/admin/Settings')),
    exact: true
  },
  {
    path: '/stores',
    component: lazy(() => import('../views/admin/Stores')),
    exact: true
  },
  {
    path: '/users',
    component: lazy(() => import('../views/admin/Users')),
    exact: true
  },
];

export default routes;