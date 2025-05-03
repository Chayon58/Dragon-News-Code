import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homelayout></Homelayout>,
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