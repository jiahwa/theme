import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Button } from "@/components/Elements";

const ErrorFallback = () => {
    return (
        <div>
            <h2>Opps, something went wrong :( </h2>
            <Button onClick={() => window.location.assign(window.location.origin)}></Button>
        </div>
    )
}

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense fallback={
            <div>React Suspense fallback!!</div>
        }>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Router>{ children }</Router>
            </ErrorBoundary>
        </React.Suspense>
    )
}