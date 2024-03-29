import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import OurMenu from "../Pages/OurMenu/OurMenu";
  

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            }
        ]
    }
])