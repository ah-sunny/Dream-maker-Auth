import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Appartment from "../pages/Appartment/Appartment";
import ViewProperty from "../pages/Appartment/ViewProperty";
import ContactUs from "../pages/Contact/ContactUs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Profile from "../pages/Profile/Profile";
import UpdatedProfile from "../pages/Profile/UpdatedProfile";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element : <Home></Home>,
            },
            {
                path: '/contact',
                element : <ContactUs></ContactUs>
            },
            {
                path:'/logIn',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/appartment',
                element: <Appartment></Appartment>
            },
            {
                path: '/appartment/:Id',
                loader: ()=> fetch('residential.json'),
                element: <PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <UpdatedProfile></UpdatedProfile>
            }
        ]
    }
]);

export default router;