import React from 'react';
const Buyurtmalar = React.lazy(() => import('../page/Buyurtmalar'))
const Maxsulotlar = React.lazy(() => import('../page/Maxsulotlar'))
const Kategoriyalar = React.lazy(() => import('../page/Kategoriyalar'))
const NodFound = React.lazy(() => import('../components/NodFound'))

export const navbarData = [
  {
    id: 1,
    path: '/buyurtmalar',
    component: <React.Suspense fallback={<h1>loading</h1>}><Buyurtmalar /></React.Suspense>,
    hidden: false,
    title: 'buyurtmalar',
  },
  {
    id: 2,
    path: '/maxsulotlar',
    component: <React.Suspense fallback={<h1>loading</h1>}><Maxsulotlar /></React.Suspense>,
    hidden: false,
    title: 'maxsulotlar',
    mobile: true
  },
  {
    id: 3,
    path: '/kategoriyalar',
    component: <React.Suspense fallback={<h1>loading</h1>}><Kategoriyalar /></React.Suspense>,
    hidden: false,
    title: 'rategoriyalar',
  },
  {
    id: 3,
    path: '/*',
    component: <React.Suspense fallback={<h1>loading</h1>}><NodFound /></React.Suspense>,
    hidden: false,
    title: 'not-found',
  },

]

