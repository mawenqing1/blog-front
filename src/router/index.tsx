import React, { lazy } from "react";
import { RouteObject, useRoutes } from "react-router";

const Home = lazy(() => import("@/pages/home/index.tsx"));

const routes:RouteObject[] = [
    {
        path: "/home",
        element: <Home />
    }
]

const router = useRoutes(routes);

export default router