import React from 'react'
import { createBrowserRouter ,RouterProvider } from "react-router";
import Authlayout from '../layout/Authlayout';
import Loginpage from '../pages/Loginpage';
import Register from '../pages/Register';
import Mainlayout from '../layout/Mainlayout';
import ProtuctedRoutes from './ProtuctedRoutes';


const AppRoutes = () => {
    let router = createBrowserRouter ([
        {
            path:"/",
            element:<Authlayout/>,
            children:[
                {
                    path:"",
                    element:<Loginpage/>
                },
                 {
                    path:"register",
                    element:<Register/>
                }
            ]
        },
        {
    path: "/main",
    element: <ProtuctedRoutes />,
    children: [
        {
            path: "",
            element: <Mainlayout />,
           
        },
    ],
}
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
