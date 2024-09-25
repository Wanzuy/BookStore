import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { AuthContext } from "../contects/AuthProvider";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import { UserOutlined, SunOutlined } from '@ant-design/icons';
import { Avatar, Drawer, Dropdown, Menu, notification } from 'antd';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 24) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //đăng xuất
    const handleLogout = () => {
        logoutUser();
        setIsLoggedOut(true);
        notification.success({
            message: "Đăng xuất thành công !",
            description: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !",
        });

    };

    useEffect(() => {
        if (isLoggedOut) {
            setIsLoggedOut(false);
            navigate("/sign-in");
        }
    }, [isLoggedOut]);

    const navItems = [
        { link: "Trang chủ", path: "/" },
        { link: "Giới thiệu", path: "/about" },
        { link: "Cửa hàng", path: "/shop" },
    ];

    const userMenu = (
        <Menu className="!shadow-2xl !p-6">
            <div className="flex items-center gap-3" >
                <Avatar className="bg-[#ff6465] hover:cursor-pointer" shape="square" size={50} icon={<UserOutlined />} />
                <div >
                    <p className="font-bold">{user?.name}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <ul className="mt-7">
                <li>
                    <Link className="py-3 block hover:text-black text-[16px]" to="#">Hồ sơ</Link>
                </li>
                <li>
                    <Link className="py-3 block hover:text-black text-[16px]" to="/admin/dashboard">Quản Trị</Link>
                </li>
                <li className=" border-t ">
                    <Link className="flex justify-between items-center py-3  hover:text-black text-[16px]" to="#">Chế độ tối <SunOutlined /></Link>
                </li>
                <li>
                    <Link className="py-3 block hover:text-black text-[16px]" to="#">Cài đặt</Link>
                </li>
                <li className="border-t">
                    <span className="py-3 block hover:text-black hover: cursor-pointer text-[16px]" onClick={handleLogout}>Đăng Xuất</span>
                </li>
            </ul>
        </Menu>
    );

    return (
        <header className="w-full bg-[#ffffff]">
            <nav
                className={`bg-[#ffffff]  pb-3 xl:px-24 px-4  ${isSticky
                    ? "pt-3 fixed top-0 left-0 right-0  transition-all ease-in rounded-b-lg"
                    : "pt-6 "
                    }`}
            >
                <div className="flex justify-between items-center">
                    {/* menu btn cho thiết bị di động và máy tính bảng */}
                    <div className="lg:hidden flex gap-8 justify-between md:justify-start w-full">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-5 w-5 text-black" />
                            ) : (
                                <FaBarsStaggered className="h-5 w-5 text-black" />
                            )}
                        </button>
                        {/* logo */}
                        <Link
                            to="/"
                            className="text-2xl font-bold text-black flex items-center mx-auto md:mx-0"
                        >
                            <img src={logo} alt="Bookstore" className="h-10 mr-2" />
                            Bookstore
                            <span className="text-[#ff6465]">.</span>
                        </Link>
                    </div>

                    {/* mục điều hướng, logo cho thiết bị lớn */}
                    <div className="flex items-center xl:gap-32 gap-10">
                        <Link
                            to="/"
                            className="hidden text-2xl font-bold text-black lg:flex items-center"
                        >
                            <img src={logo} alt="Bookstore" className="h-10 mr-2" />
                            Bookstore
                            <span className="text-[#ff6465]">.</span>
                        </Link>
                        <ul className="hidden lg:flex space-x-8">
                            {navItems.map(({ link, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`block text-[14px] text-base font-semibold  uppercase cursor-pointer hover:text-[#ff6465] hover:border-b-4 hover:border-[#ff6465] ${location.pathname === path
                                        ? "border-b-4 border-[#ff6465] text-[#ff6465]"
                                        : "text-black"
                                        }`}
                                    onClick={() => handleNavLinkClick(path)}
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>


                    <div className="flex gap-5 items-center">
                        {/* Đăng nhập Đăng ký */}
                        {!user ? (
                            <>
                                <Link
                                    to="/sign-in"
                                    className="min-w-24 text-black text-[14px] font-semibold hover:text-[#ff6465] hidden md:block"
                                >
                                    ĐĂNG NHẬP
                                </Link>
                                <Link
                                    to="/sign-up"
                                    className="min-w-24 text-center text-[14px] bg-[#ff6465] text-white font-semibold p-2 rounded-md hover:opacity-80 hidden md:block"
                                >
                                    ĐĂNG KÝ
                                </Link>
                            </>
                        ) : (
                            // Thông tin người dùng, Quản  trị
                            <>
                                <div className="flex items-center h-[50px] bg-[#eeeeee] rounded-md md:flex lg:flex hidden md:flex">
                                    <div>
                                        <button className="flex gap-2 py-[13px] px-[20px]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>0</span>
                                        </button>
                                    </div>
                                    <div className="w-[1px] h-[30px] bg-[#969494]"></div>
                                    <div>
                                        <button className="flex gap-2 py-[13px] px-[20px]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.75012 3.24991L4.83012 3.60991L5.79312 15.0829C5.87012 16.0199 6.65312 16.7389 7.59312 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63191C21.3421 7.89891 20.8331 7.21891 20.1011 7.11291C20.0371 7.10391 5.16412 7.09891 5.16412 7.09891" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.1251 10.7948H16.8981" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.15441 20.2025C7.45541 20.2025 7.69841 20.4465 7.69841 20.7465C7.69841 21.0475 7.45541 21.2915 7.15441 21.2915C6.85341 21.2915 6.61041 21.0475 6.61041 20.7465C6.61041 20.4465 6.85341 20.2025 7.15441 20.2025Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.4347 20.2025C18.7357 20.2025 18.9797 20.4465 18.9797 20.7465C18.9797 21.0475 18.7357 21.2915 18.4347 21.2915C18.1337 21.2915 17.8907 21.0475 17.8907 20.7465C17.8907 20.4465 18.1337 20.2025 18.4347 20.2025Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>$0</span>
                                        </button>
                                    </div>
                                </div>
                                <Dropdown overlay={userMenu} trigger={['hover']} arrow>
                                    <Avatar className="bg-[#ff6465] hover:cursor-pointer" shape="square" size={50} icon={<UserOutlined />} />
                                </Dropdown>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <Drawer
                title="Menu"
                placement="left"
                onClose={toggleMenu}
                open={isMenuOpen}
                className="block lg:hidden"
            >
                <Menu
                    mode="vertical"
                    onClick={toggleMenu}
                >
                    {navItems.map(({ link, path }) => (
                        <Menu.Item key={path}>
                            <Link to={path}>{link}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </header>
    );
};

export default Navbar;