import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../../pages/Home";
import CategoryNews from "../../pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homelayout></Homelayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                },
            ]
        },
        {
            path: "/auth",
            element: <h1>authentication Layout</h1>
        },
        {
            path: "/news",
            element: <h1>News Layout</h1>
        },
        {
            path: "/*",
            element: <h1>error</h1>
        },
    ]
);

export default router;