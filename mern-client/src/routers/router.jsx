import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/home/About";
import SingleBook from "../pages/shop/SingleBook";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import UploadBook from "../pages/dashboard/UploadBook";
import ManageBooks from "../pages/dashboard/ManageBooks";
import EditBooks from "../pages/dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Signin from "../components/Signin";
import Contact from "../components/Contact";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import DefaultLayout from "../pages/userInfor/DefaultLayout";
import GeneralInformation from "../pages/userInfor/GeneralInformation";
import Infor from "../pages/userInfor/Infor";
import FavouriteList from "../pages/FavouriteList";

const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user && user !== "null";
};

// Định nghĩa các router của user
const userRoutes = [
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
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/favourite-list",
                element: <FavouriteList />,
            },
            {
                path: "/user/acount",
                element: (
                    <ProtectedAdminRoute element={DefaultLayout} role="user" />
                ),
                children: [
                    {
                        path: "/user/acount",
                        element: <GeneralInformation />,
                    },
                    {
                        path: "/user/acount/user-info",
                        element: <Infor />,
                    },
                ],
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
];

// Định nghĩa các router của admin
const adminRoutes = [
    {
        path: "/admin/dashboard",
        element: <ProtectedAdminRoute element={DashboardLayout} role="admin" />,
        children: [
            {
                path: "/admin/dashboard",
                element: (
                    <ProtectedAdminRoute element={Dashboard} role="admin" />
                ),
            },
            {
                path: "/admin/dashboard/upload",
                element: (
                    <ProtectedAdminRoute element={UploadBook} role="admin" />
                ),
            },
            {
                path: "/admin/dashboard/manage",
                element: (
                    <ProtectedAdminRoute element={ManageBooks} role="admin" />
                ),
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: (
                    <ProtectedAdminRoute element={EditBooks} role="admin" />
                ),
            },
        ],
    },
];

// Kết hợp các router của user và admin
const router = createBrowserRouter([...userRoutes, ...adminRoutes]);

export default router;
