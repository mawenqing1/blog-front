import React, { lazy } from "react";
import { RouteObject, useRoutes, Navigate } from "react-router";
import Layouts from "@/pages/layout"

const Home = lazy(() => import("@/pages/home"));
const Article = lazy(() => import("@/pages/article"));
const Detail = lazy(() => import("@/pages/detail"));

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/layout" />
    },
    {
        path:'/layout',
        element: <Layouts />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "article",
                element: <Article />
            },
            {
                path: "detail",
                element: <Detail />
            }
        ]
    }
]

const router = () => useRoutes(routes);

export default router