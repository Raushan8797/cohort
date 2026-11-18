import {createBrowserRouter} from "react-router"
import Register from "../modules/Auth/pages/Register.jsx";
import Profile from "../modules/Auth/pages/Profile.jsx";


const  router = createBrowserRouter([
{
    path: "/register",
    element: <Register/>
},
{
    path: "/profile",
    element: <Profile/>
}
])

export default router