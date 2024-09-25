import React, { useEffect, useState } from "react";
import BannerCard from "../pages/home/BannerCard";

const Banner = () => {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="px-4 lg:px-24 bg-[#f5ffff] lg:min-h-[762px]">
            <div className="flex w-full flex-col lg:flex-row justify-between items-center py-16">
                {/* left side */}
                <div className="lg:w-1/2 space-y-6 h-full" data-aos="fade-up">
                    <h2 className="lg:w-4/5 text-5xl font-bold leading-snug text-black">
                        Mua và bán sách của bạn ở đây{" "}
                        <span className="text-[#ff6465]">
                            để có giá tốt nhất !
                        </span>
                    </h2>
                    <p className="md:w-4/5 text-[#919799] text-[18px]  text-stroke text-shadow">
                        Khám phá mức giá tốt nhất để mua và bán sách trên thị
                        trường của chúng tôi, mua và bán một cách tự tin hôm
                        nay!
                    </p>
                    <div>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Tìm kiếm sách"
                            className="py-2 px-2 rounded-s-sm outline-none border-none"
                        />
                        <button className="bg-[#ff6465] px-6 py-2 text-white font-medium  hover:bg-black transition-all ease-in duration-200">
                            Search
                        </button>
                    </div>
                </div>
                {/* right side */}
                {isLgScreen && (
                    <div data-aos="fade-up">
                        <BannerCard></BannerCard>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
