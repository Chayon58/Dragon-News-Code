import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <h1>Home</h1>
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