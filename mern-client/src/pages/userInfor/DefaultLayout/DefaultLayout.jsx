import React, { useContext } from "react";
import { AuthContext } from "../../../contects/AuthProvider";
import { Upload } from "antd";
import {
    GiftOutlined,
    HeartOutlined,
    InfoCircleOutlined,
    KeyOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-[#f6f6f6]">
            <div className="px-4 lg:px-24">
                <div className="py-8 flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-[345px] bg-white rounded-[20px] overflow-hidden">
                        <div className="w-full h-[246px] bg-[#ED553B] pt-[40px]">
                            <div className="w-[205px] mx-auto flex flex-col items-center">
                                <Upload
                                    name="avatar"
                                    listType="picture-circle"
                                    showUploadList={false}
                                    beforeUpload={() => false}
                                    onChange={() => {}}
                                >
                                    <img
                                        src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"
                                        alt="avatar"
                                        style={{
                                            borderColor:
                                                "rgba(163, 173, 173, 0.5)",
                                        }}
                                        className="w-full h-full rounded-[50%] object-cover border-[5px]"
                                    />
                                </Upload>
                                <h3 className="text-white text-[18px] font-semibold mt-3">
                                    {user.name}
                                </h3>
                                <p className="text-white text-[13px] mt-1">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full h-full py-[30px] pl-[30px]">
                            <div className="font-bold text-[18px] text-[#1A162E]">
                                Quản lý tài khoản
                            </div>
                            <ul className="mt-[17px]">
                                <li>
                                    <Link
                                        to="/user/acount/user-info"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <UserOutlined />
                                        Thông tin cá nhân
                                    </Link>
                                </li>
                                <li className="mt-[12px]">
                                    <Link
                                        to="/user/acount/change-password"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <KeyOutlined />
                                        Đổi mật khẩu
                                    </Link>
                                </li>
                            </ul>

                            <div className="font-bold text-[18px] text-[#1A162E] mt-7">
                                My items
                            </div>
                            <ul className="mt-[17px]">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <UserOutlined className="" />
                                        Reorder
                                    </Link>
                                </li>
                                <li className="mt-[12px]">
                                    <Link
                                        href="#"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <HeartOutlined />
                                        Lists
                                    </Link>
                                </li>

                                <li className="mt-[12px]">
                                    <Link
                                        href="#"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <GiftOutlined />
                                        Registries
                                    </Link>
                                </li>
                            </ul>

                            <div className="font-bold text-[18px] text-[#1A162E] mt-7">
                                Customer Service
                            </div>
                            <ul className="mt-[17px]">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <UserOutlined className="" />
                                        Help
                                    </Link>
                                </li>
                                <li className="mt-[12px]">
                                    <Link
                                        href="#"
                                        className="text-[15px] leading-normal flex items-center gap-[10px]"
                                    >
                                        <InfoCircleOutlined />
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-[100vh] bg-white rounded-[20px] px-5 py-4 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
