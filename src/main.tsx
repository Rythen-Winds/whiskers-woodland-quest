import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Menu from "./components/Main_Menu.tsx";
import Character_Menu from "./components/Character_Menu.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Menu />,
  },
  {
    path: "/character_menu",
    element: <Character_Menu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
