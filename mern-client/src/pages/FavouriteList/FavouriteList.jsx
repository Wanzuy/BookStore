import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { CustomCheckbox, CustomCheckboxx } from "./FavouriteList.styled";
import book from "../../assets/awardbooks.png";

function FavouriteList() {
    return (
        <div className="px-4 lg:px-24 mt-[30px]">
            <div className="p-4 bg-[#fafafa] rounded-lg">
                <div className="flex items-center gap-4 text-[#9E9DA8] text-[16px] font-semibold">
                    <Link to="/" className="">
                        TRANG CHỦ
                    </Link>
                    <RightOutlined />
                    <span className="text-black ">SẢN PHẨM YÊU THÍCH</span>
                </div>
            </div>

            <div className="my-5 p-4 bg-[#fafafa] rounded-lg">
                <CustomCheckbox />

                <div className="flex items-start mt-[30px] gap-6  border-b-2 ">
                    <CustomCheckboxx />
                    <img src={book} className="w-[175px] h-[172px]" />
                    <div className="w-full h-[172px] p-5">
                        <div className="flex justify-between">
                            <p>
                                Coffee Beans - Espresso Arabica and Robusta
                                Beans
                            </p>
                            <span>$47.00</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <span className="text-gray-500 font-medium">
                                $47.00
                            </span>
                            <span className="text-gray-500">|</span>
                            <span className="text-[#ED553B] font-medium">
                                In Stock
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                                <select className="border rounded-lg px-3 py-1">
                                    <option>LavAzza</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>

                                <div className="flex items-center border rounded-lg">
                                    <button className="px-2">-</button>
                                    <span className="px-2">1</span>
                                    <button className="px-2">+</button>
                                </div>

                                <button className="flex items-center text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656l-7.071 7.071a1 1 0 01-1.414 0l-7.071-7.071a4 4 0 010-5.656z" />
                                    </svg>
                                    Save
                                </button>

                                <button className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h1.362l1.528 7.276a3 3 0 002.918 2.394h2.382a3 3 0 002.918-2.394L15.638 6H18a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0011 2H9zm3 14a2 2 0 11-4 0h4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                            <button className="bg-[#ED553B] text-white rounded-lg px-4 py-2">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-start mt-[30px] gap-6 border-b-2 ">
                    <CustomCheckboxx />
                    <img src={book} className="w-[175px] h-[172px]" />
                    <div className="w-full h-[172px] p-5">
                        <div className="flex justify-between">
                            <p>
                                Coffee Beans - Espresso Arabica and Robusta
                                Beans
                            </p>
                            <span>$47.00</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <span className="text-gray-500 font-medium">
                                $47.00
                            </span>
                            <span className="text-gray-500">|</span>
                            <span className="text-[#ED553B] font-medium">
                                In Stock
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                                <select className="border rounded-lg px-3 py-1">
                                    <option>LavAzza</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>

                                <div className="flex items-center border rounded-lg">
                                    <button className="px-2">-</button>
                                    <span className="px-2">1</span>
                                    <button className="px-2">+</button>
                                </div>

                                <button className="flex items-center text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656l-7.071 7.071a1 1 0 01-1.414 0l-7.071-7.071a4 4 0 010-5.656z" />
                                    </svg>
                                    Save
                                </button>

                                <button className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h1.362l1.528 7.276a3 3 0 002.918 2.394h2.382a3 3 0 002.918-2.394L15.638 6H18a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0011 2H9zm3 14a2 2 0 11-4 0h4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                            <button className="bg-[#ED553B] text-white rounded-lg px-4 py-2">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-start mt-[30px] gap-6">
                    <CustomCheckboxx />
                    <img src={book} className="w-[175px] h-[172px]" />
                    <div className="w-full h-[172px] p-5">
                        <div className="flex justify-between">
                            <p>
                                Coffee Beans - Espresso Arabica and Robusta
                                Beans
                            </p>
                            <span>$47.00</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <span className="text-gray-500 font-medium">
                                $47.00
                            </span>
                            <span className="text-gray-500">|</span>
                            <span className="text-[#ED553B] font-medium">
                                In Stock
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                                <select className="border rounded-lg px-3 py-1">
                                    <option>LavAzza</option>
                                    {/* Thêm các tùy chọn khác nếu cần */}
                                </select>

                                <div className="flex items-center border rounded-lg">
                                    <button className="px-2">-</button>
                                    <span className="px-2">1</span>
                                    <button className="px-2">+</button>
                                </div>

                                <button className="flex items-center text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656l-7.071 7.071a1 1 0 01-1.414 0l-7.071-7.071a4 4 0 010-5.656z" />
                                    </svg>
                                    Save
                                </button>

                                <button className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h1.362l1.528 7.276a3 3 0 002.918 2.394h2.382a3 3 0 002.918-2.394L15.638 6H18a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0011 2H9zm3 14a2 2 0 11-4 0h4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                            <button className="bg-[#ED553B] text-white rounded-lg px-4 py-2">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteList;
