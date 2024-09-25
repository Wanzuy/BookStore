import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../../assets/awardbooks.png";

const PromoBanner = () => {
    return (
        <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">
                        Danh sách rút gọn Giải thưởng Sách Quốc gia năm 2024
                    </h2>
                    <Link to="#" className="block">
                        <button className="bg-[#ED553B] text-white font-semibold px-5 py-2 rounded hover:opacity-80 transition-all duration-500">
                            Get Promo
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={bookPic} alt="" className="w-96" />
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
