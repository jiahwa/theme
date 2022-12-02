import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cay } from "./Cay";

export const TemplateRoutes = () => {
    return (
        <Routes>
            <Route path="cay" element={<Cay />} />
        </Routes>
    )
}