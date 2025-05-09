import Home from "./pages/home";
import TopArtists from "./pages/topartists";
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
        path: "/",
        element: <Home />,
        errorElement: <div>404</div>,
    }
])