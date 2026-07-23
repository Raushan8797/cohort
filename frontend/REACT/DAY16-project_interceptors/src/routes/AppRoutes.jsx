import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Authlayout from "../layout/Authlayout";
import Loginpage from "../pages/Loginpage";
import Register from "../pages/Register";
import Mainlayout from "../layout/Mainlayout";
import ProtuctedRoutes from "./ProtuctedRoutes";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <Authlayout />,
          children: [
            {
              path: "",
              element: <Loginpage />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtuctedRoutes />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
           children:[{
                path:"",
                element:<HomePage/>
            },
            {
                path:"users",
                element:<UserPage/>
            },
            {
                path:"product",
                element:<ProductPage/>
            },
        ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
