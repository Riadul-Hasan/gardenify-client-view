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
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("https://gardening-server-theta.vercel.app/gardeners"),
                Component: Home
            },
            {
                path: "/explore",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("/exploreGardeners.json"),
                Component: ExploreGardeners
            },
            {
                path: "/browseTips",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("https://gardening-server-theta.vercel.app/shareTips"),
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
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoute><MyTips></MyTips></PrivateRoute>
            },
            {
                path: "/tipsDetails/:id",
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://gardening-server-theta.vercel.app/shareTips/${params.id}`),
                element: <PrivateRoute><TipsDetails></TipsDetails></PrivateRoute>
            },
            {
                path: "/updateTips/:id",
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`https://gardening-server-theta.vercel.app/shareTips/${params.id}`),
                element: <PrivateRoute><UpdateTips></UpdateTips></PrivateRoute>
            }


        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);