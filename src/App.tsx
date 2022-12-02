import React from "react";
import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import './App.css';


function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App;
