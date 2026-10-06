import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegistePage from "../pages/RegistePage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/AuthSlice";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";

const AppRoutes = () => {
  let dispatch = useDispatch();
  const hydrateUser = () => {
    console.log("hydration processed");

    let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
    if (!loggedinUser) {
      toast.error("unAuthorized User");
      return;
    }
    dispatch(addUser(loggedinUser));
  };
  useEffect(() => {
    hydrateUser();
  }, []);

  let Route = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegistePage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={Route} />;
};

export default AppRoutes;
