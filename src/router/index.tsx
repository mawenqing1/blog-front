import React, { lazy } from 'react'
import { RouteObject, useRoutes, Navigate } from 'react-router'
import Layouts from '@/pages/layout'

const Home = lazy(async () => await import('@/pages/home'))
const Article = lazy(async () => await import('@/pages/article'))
const Detail = lazy(async () => await import('@/pages/detail'))
const Words = lazy(async () => await import('@/pages/words'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/layout" />
  },
  {
    path: '/layout',
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'detail',
        element: <Detail />
      },
      {
        path: 'words',
        element: <Words />
      }
    ]
  }
]

const router = () => useRoutes(routes)

export default router
