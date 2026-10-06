import React, { useEffect } from "react";
import { createBrowserRouter, data, RouterProvider } from "react-router";
import Authlayout from "../app/layout/Authlayout";
import PublicProtected from "./protected/PublicProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/ui/pages/HomePage";
import Productpage from "../features/products/ui/pages/Productpage";
import OrderPage from "../features/orders/ui/pages/orderPage";
import CartPage from "../features/cart/ui/pages/CartPage";

import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/AuthSlice";
import Mainlayout from "../app/layout/Mainlayout";
import { hydrateUserAction } from "../features/auth/state/AuthAction";
import AboutPage from "../shared/ui/pages/AboutPage";
const AppRouter = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    ( () => {
      try {
        
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <Authlayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
       {path: "",
          element: <Mainlayout />,
        children:[
           {
          path: "",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <Productpage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        ]
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
