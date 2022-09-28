import React, { lazy } from "react";
import { RouteObject, useRoutes } from "react-router";

const Home = lazy(() => import("@/pages/home"));

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    }
]

const router = () => useRoutes(routes);

export default router