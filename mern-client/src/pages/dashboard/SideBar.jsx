import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
    HiChartPie,
    HiInbox,
    HiOutlineCloudUpload,
    HiTable,
    HiUser,
    HiViewBoards,
} from "react-icons/hi";
import { AuthContext } from "../../contects/AuthProvider";
import avata from "../../assets/Avatar.png";

const SideBar = () => {

    const { user } = useContext(AuthContext);
    return (
        <Sidebar
            aria-label="Sidebar with content separator example"
            className="h-[100vh]"
        >
            <Sidebar.Items>
                <Sidebar.Logo href="/" img={avata} imgAlt="Flowbite logo">
                    <p>{user?.name}</p>
                </Sidebar.Logo>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Bảng điều khiển
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/admin/dashboard/upload"
                        icon={HiOutlineCloudUpload}
                    >
                        Tải sách lên
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Quản lý sách
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Người dùng
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        Đơn hàng
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default SideBar;
