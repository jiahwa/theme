import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";

const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");

const App = () => {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    )
}

export const protectedRoutes = [
    {
        path: "/app",
        element: <App />,
        children: [
            { path: "/", element: <Dashboard />},
            { path: "*", element: <Navigate to="." />}
        ]
    }
]