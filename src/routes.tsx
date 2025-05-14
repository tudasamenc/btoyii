import Home from "./pages/home";
import Test from "./pages/test";
import TopArtists from "./pages/topartists";
import User from "./pages/user";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>404</div>,
    },
    {
        path: "/topartists",
        element: <TopArtists/>,
        errorElement: <div>404</div>,
    },
    {
        path: "/user",
        element: <User />,
        errorElement: <div>404</div>,
    },
    {
        path: "/test",
        element: <Test />,
        errorElement: <div>404</div>,
    }
])