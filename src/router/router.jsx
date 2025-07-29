import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import NotFound from "../Pages/Home/NotFound/NotFound";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFound></NotFound>,
    children:[
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);