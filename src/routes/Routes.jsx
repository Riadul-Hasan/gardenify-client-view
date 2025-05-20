import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);