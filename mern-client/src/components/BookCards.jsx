import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
    return (
        <div
            className="min-h-[633px] my-16 px-4 lg:px-24 min-w-[10px]"
            data-aos="fade-right"
        >
            <h2 className="flex text-2xl text-center items-center font-bold text-[#ED553B]">
                <span className="flex-1 block w-full h-[3px] bg-black "></span>
                <span className="px-8">{headline}</span>
                <span className="flex-1 block w-full h-[3px] bg-black"></span>
            </h2>
            {/* cards */}
            <div className="mt-12">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000, // Đặt khoảng thời gian giữa các slide (milliseconds)
                        disableOnInteraction: false, // Cho phép autoplay kể cả khi người dùng tương tác với Swiper
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper w-full h-full"
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className="relative p-[54px] rounded-md shadow-lg border border-[#EAE8DF]">
                                    <img
                                        className="w-full h-[318px] shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
                                        src={book.imageUrl}
                                        alt={book.bookTitle}
                                    />
                                    <div className="absolute top-2 right-3 bg-[#71a3c1] hover:opacity-80 p-2 rounded">
                                        <FaCartShopping className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="absolute top-2 right-14 bg-[#ED553B] hover:opacity-80 p-2 rounded">
                                        <FaHeart className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-bold text-center line-clamp-1">
                                        {book.bookTitle}
                                    </h3>
                                    <p className="font-extralight text-center">
                                        {book.authorName}
                                    </p>
                                    <p className="text-[#ED553B] font-bold text-center">
                                        $ {book.price}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
