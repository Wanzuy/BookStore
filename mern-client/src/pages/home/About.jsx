import React from "react";
import hero from "../../assets/Rectangle.png";

const About = () => {
    return (
        <>
            <img className="w-full object-cover" src={hero} alt="hero" />
            <div className="px-4 lg:px-24">
                <div>
                    <h1 className="font-bold text-[30px] text-[#ED553B]">
                        About Us
                    </h1>
                    <p className="mt-[44px] text-[20px] text-justify italic">
                        Welcome to Neth BookPoint, your trusted source for a
                        diverse range of books catering to every reader's taste.
                        Established with the mission to foster a love for
                        reading in our community, we pride ourselves on
                        providing excellent service and a wide selection of
                        books. Our journey began in 2021, and since then, we
                        have grown to become a beloved destination for book
                        lovers. Below, you'll find information about our four
                        branches, their locations, and contact numbers.
                    </p>
                </div>

                <div className="mt-[66px]">
                    <h1 className="font-bold text-[30px] text-[#ED553B]">
                        Our Branches
                    </h1>
                    <div className="mt-[47px] flex gap-24">
                        {/* Branch 1 */}
                        <div className=" p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-[#ED553B]">
                                Kurunegala
                            </h3>
                            <p className="mt-2">
                                <span className="text-[#F27A61]">
                                    {" "}
                                    Main Street, City Center
                                </span>
                                <br />
                                Contact: 011-2345678 <br />
                                Operating Hours: Monday to Saturday - 9 AM - 7
                                PM
                            </p>
                            <p className="mt-4 italic">
                                In-store shopping, Special sessions for
                                children, Workshops, Study space
                            </p>
                        </div>

                        {/* Branch 2 */}
                        <div className=" p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-[#ED553B]">
                                Kandy
                            </h3>
                            <p className="mt-2">
                                <span className="text-[#F27A61]">
                                    {" "}
                                    Main Street, City Center
                                </span>
                                <br />
                                Contact: 011-2345678 <br />
                                Operating Hours: Monday to Saturday - 9 AM - 7
                                PM
                            </p>
                            <p className="mt-4 italic">
                                In-store shopping, Special sessions for
                                children, Workshops, Study space
                            </p>
                        </div>

                        {/* Branch 3 */}
                        <div className=" p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-[#ED553B]">
                                Colombo
                            </h3>
                            <p className="mt-2">
                                <span className="text-[#F27A61]">
                                    {" "}
                                    Main Street, City Center
                                </span>
                                <br />
                                Contact: 011-2345678 <br />
                                Operating Hours: Monday to Saturday - 9 AM - 7
                                PM
                            </p>
                            <p className="mt-4 italic">
                                In-store shopping, Special sessions for
                                children, Workshops, Study space
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-[84px] px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-semibold text-[#ED553B]">
                        Our Commitment
                    </h2>
                    <p class="text-gray-600 mb-8 max-w-xl mx-auto">
                        Chúng tôi cam kết mang đến cho bạn những cuốn sách chất lượng, giá cả hợp lý và dịch vụ khách hàng tận tình. Mỗi sản phẩm đều được chọn lọc kỹ càng để đảm bảo rằng bạn sẽ có trải nghiệm đọc tuyệt vời nhất.
                    </p>
                    <div class="flex flex-wrap justify-center gap-6">
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Chất Lượng Sản Phẩm</h3>
                            <p class="text-gray-600">Tất cả sách được kiểm tra kỹ càng trước khi đến tay bạn.</p>
                        </div>
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Giá Cả Hợp Lý</h3>
                            <p class="text-gray-600">Cam kết mang đến giá cả cạnh tranh, phù hợp với mọi đối tượng.</p>
                        </div>
                        <div class="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Dịch Vụ Khách Hàng</h3>
                            <p class="text-gray-600">Luôn sẵn sàng hỗ trợ và tư vấn tận tình khi bạn cần.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
