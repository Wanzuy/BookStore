import React from "react";

const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.role === "admin";
};

const AdminRoute = ({ element: Component }) => {
    return isAdmin() ? <Component /> : <div>Bạn không có quyền sử dụng chức năng này</div>;
};

export default AdminRoute;