import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/home/About";
import Blog from "../components/Blog";
import SingleBook from "../pages/shop/SingleBook";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import UploadBook from "../pages/dashboard/UploadBook";
import ManageBooks from "../pages/dashboard/ManageBooks";
import EditBooks from "../pages/dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Signin from "../components/Signin";
import ProtectedRoute from "../routers/ProtectedRoute";
import AdminRoute from "./AdminRoute";


const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user !== null && user !== "null";
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/sign-up",
                element: isAuthenticated() ? <Navigate to="/" /> : <SignUp />,
            },
            {
                path: "/sign-in",
                element: isAuthenticated() ? <Navigate to="/" /> : <Signin />,
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/api/books/book/${params.id}`),
            },
        ],
    },
    {
        path: "/admin/dashboard",
        element: <ProtectedRoute element={DashboardLayout} />,
        children: [
            {
                path: "/admin/dashboard",
                element: <AdminRoute element={Dashboard} />,
            },
            {
                path: "/admin/dashboard/upload",
                element: <AdminRoute element={UploadBook} />,
            },
            {
                path: "/admin/dashboard/manage",
                element: <AdminRoute element={ManageBooks} />,
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <AdminRoute element={EditBooks} />,
            },
        ],
    },
]);

export default router;

