import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react icon
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../../assets/Avatar.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./Review.css";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
    return (
        <div className="review my-12 px-4 lg:px-24">
            <h2 className="flex text-2xl text-center items-center font-bold text-[#ED553B]">
                <span className="flex-1 block w-full h-[3px] bg-black "></span>
                <span className="px-8">ĐÁNH GIÁ</span>
                <span className="flex-1 block w-full h-[3px] bg-black"></span>
            </h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="shadow-2xl py-8 px-4 md:m-5 rounded-lg border">
                        <div>
                            <div className="text-amber-500 flex gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className="mt-7">
                                <p className="mb-5 text-justify">
                                    Một trong những trang web bán sách uy tín và
                                    phổ biến nhất tại Việt Nam là Bookstore.vn.
                                    Trang web này nổi bật với giao diện thân
                                    thiện, dễ sử dụng và cung cấp đa dạng thể
                                    loại sách từ sách văn học, sách giáo dục đến
                                    sách chuyên ngành.
                                </p>
                                <Avatar
                                    img={proPic}
                                    alt="avatar of Jese"
                                    rounded
                                    className="w-10 mb-4"
                                />
                                <h5 className="text-lg font-medium">
                                    Mark Ping
                                </h5>
                                <p className="text-base">CEO, ACD Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shadow-2xl py-8 px-4 md:m-5 rounded-lg border">
                        <div>
                            <div className="text-amber-500 flex gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className="mt-7">
                                <p className="mb-5 text-justify">
                                    Một trong những trang web bán sách uy tín và
                                    phổ biến nhất tại Việt Nam là Bookstore.vn.
                                    Trang web này nổi bật với giao diện thân
                                    thiện, dễ sử dụng và cung cấp đa dạng thể
                                    loại sách từ sách văn học, sách giáo dục đến
                                    sách chuyên ngành.
                                </p>
                                <Avatar
                                    img={proPic}
                                    alt="avatar of Jese"
                                    rounded
                                    className="w-10 mb-4"
                                />
                                <h5 className="text-lg font-medium">
                                    Mark Ping
                                </h5>
                                <p className="text-base">CEO, ACD Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shadow-2xl py-8 px-4 md:m-5 rounded-lg border">
                        <div>
                            <div className="text-amber-500 flex gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className="mt-7">
                                <p className="mb-5 text-justify">
                                    Một trong những trang web bán sách uy tín và
                                    phổ biến nhất tại Việt Nam là Bookstore.vn.
                                    Trang web này nổi bật với giao diện thân
                                    thiện, dễ sử dụng và cung cấp đa dạng thể
                                    loại sách từ sách văn học, sách giáo dục đến
                                    sách chuyên ngành.
                                </p>
                                <Avatar
                                    img={proPic}
                                    alt="avatar of Jese"
                                    rounded
                                    className="w-10 mb-4"
                                />
                                <h5 className="text-lg font-medium">
                                    Mark Ping
                                </h5>
                                <p className="text-base">CEO, ACD Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shadow-2xl py-8 px-4 md:m-5 rounded-lg border">
                        <div>
                            <div className="text-amber-500 flex gap-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className="mt-7">
                                <p className="mb-5 text-justify">
                                    Một trong những trang web bán sách uy tín và
                                    phổ biến nhất tại Việt Nam là Bookstore.vn.
                                    Trang web này nổi bật với giao diện thân
                                    thiện, dễ sử dụng và cung cấp đa dạng thể
                                    loại sách từ sách văn học, sách giáo dục đến
                                    sách chuyên ngành.
                                </p>
                                <Avatar
                                    img={proPic}
                                    alt="avatar of Jese"
                                    rounded
                                    className="w-10 mb-4"
                                />
                                <h5 className="text-lg font-medium">
                                    Mark Ping
                                </h5>
                                <p className="text-base">CEO, ACD Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
