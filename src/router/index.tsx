import React, { lazy } from "react";
import { RouteObject, useRoutes } from "react-router";
import Layouts from "@/pages/layout"

// const Layout = () => import("@/pages/layout");
const Home = lazy(() => import("@/pages/home"));
const Article = lazy(() => import("@/pages/article"));

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Layouts />
    },
    {
        path:'/layout',
        element: <Layouts />,
        children:[
            {
                path: "home",
                element: <Home />
            },
            {
                path: "article",
                element: <Article />
            },
        ]
    }
]

const router = () => useRoutes(routes);

export default router