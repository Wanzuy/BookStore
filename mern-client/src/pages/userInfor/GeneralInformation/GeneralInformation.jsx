import React, { useEffect, useState } from "react";
import {
    CalendarOutlined,
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import card from "../../../assets/card.png";
import fcard from "../../../assets/fcard.png";
import { getUserProfile } from "../../../services/userService";
import { formatDate } from "../../../utils/dateUtils";

function GeneralInformation() {
    const [data, setData] = useState([]);

    // lấy thông tin người dùng
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getUserProfile();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserProfile();
    }, [data]);

    return (
        <>
            <div className="max-w-4xl font-sans">
                <h2 className="text-2xl font-bold mb-2">Ví của tôi</h2>
                <p className="text-gray-500 mb-4">Phương thức thanh toán</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img src={card} alt="card 1" />
                    <img src={fcard} alt="card 1" />
                    <div className="border-2 border-dashed border-gray-300 rounded-lg w-full flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100 transition">
                        <span className="text-2xl">+</span>
                        <p className="mt-2">Add New Card</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-2">Thông tin tài khoản</h2>
                <p className="text-gray-500 mb-6">
                    Địa chỉ và thông tin liên lạc
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center bg-[#f6f6f6] p-4 rounded-lg">
                        <div className="p-2 bg-white rounded-lg mr-4">
                            <MailOutlined />
                        </div>
                        <div>
                            <h3 className="font-semibold">Địa chỉ email</h3>
                            <p className="text-gray-700">{data.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-[#f6f6f6] p-4 rounded-lg">
                        <div className="p-2 bg-white rounded-lg mr-4">
                            <PhoneOutlined />
                        </div>
                        <div>
                            <h3 className="font-semibold">Số điện thoại</h3>
                            <p className="text-gray-700">{data.phoneNumber}</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-[#f6f6f6] p-4 rounded-lg ">
                        <div className="p-2 bg-white rounded-lg mr-4">
                            <CalendarOutlined />
                        </div>
                        <div>
                            <h3 className="font-semibold">Ngày sinh</h3>
                            <p className="text-gray-700">
                                {formatDate(data.birthday)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center bg-[#f6f6f6] p-4 rounded-lg ">
                        <div className="p-2 bg-white rounded-lg mr-4">
                            <EnvironmentOutlined />
                        </div>
                        <div>
                            <h3 className="font-semibold">Địa chỉ</h3>
                            <p className="text-gray-700">{data.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GeneralInformation;
