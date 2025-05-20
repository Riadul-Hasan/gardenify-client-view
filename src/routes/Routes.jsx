import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import Register from "../pages/Register";
import ExploreGardeners from "../pages/ExploreGardeners";
import BrowseTips from "../pages/BrowseTips";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/gardeners"),
                Component: Home
            },
            {
                path: "/explore",
                Component: ExploreGardeners
            },
            {
                path: "/browseTips",
                Component: BrowseTips
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            }

        ]
    },
]);