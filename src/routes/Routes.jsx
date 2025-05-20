import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import Register from "../pages/Register";

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
                path: "/register",
                Component: Register
            }

        ]
    },
]);