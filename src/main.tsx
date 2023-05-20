import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Page from "./pages/page";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Question from "./pages/question";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/question/:question_id",
    element: <Question />,
  },
  {
    path: "/page/:thread_id",
    element: <Page />,
  },
  {
    path: "/profile/:id_user",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
