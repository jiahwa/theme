import React from "react";
import { useRoutes } from "react-router-dom";
// import { useAuth } from "@/lib/auth";

import { Landing } from "@/features/misc";

import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

import "@/utils/snow";

export const AppRoutes = () => {
    // const auth = useAuth();

    const commonRoutes = [{ path: "/", element: <Landing /> }];

    const routes = null ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);
    return (<>{element}</>);
}