import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
  

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
            },
            {
                path: "/shop",
                element: <OurShop></OurShop>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])