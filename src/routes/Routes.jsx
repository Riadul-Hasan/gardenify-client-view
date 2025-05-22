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
import ShareGardenTip from "../pages/ShareGardenTip";
import PrivateRoute from "../provider/PrivateRoute";
import MyTips from "../pages/MyTips";
import TipsDetails from "../pages/TipsDetails";
import UpdateTips from "../pages/UpdateTips";

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
                loader: () => fetch("/exploreGardeners.json"),
                Component: ExploreGardeners
            },
            {
                path: "/browseTips",
                loader: () => fetch("http://localhost:3000/shareTips"),
                Component: BrowseTips
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/shareTips",
                element: <PrivateRoute>
                    <ShareGardenTip></ShareGardenTip>
                </PrivateRoute>
            },
            {
                path: '/myTips',

                element: <PrivateRoute><MyTips></MyTips></PrivateRoute>
            },
            {
                path: "/tipsDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/shareTips/${params.id}`),
                element: <PrivateRoute><TipsDetails></TipsDetails></PrivateRoute>
            },
            {
                path: "/updateTips/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/shareTips/${params.id}`),
                element: <PrivateRoute><UpdateTips></UpdateTips></PrivateRoute>
            }


        ]
    },
]);