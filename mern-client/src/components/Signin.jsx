import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import { notification } from "antd";
import banner from "../assets/salebook.png";


function Signin() {
    const { loginUserHandler } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || "/";

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await loginUserHandler(email, password);
            notification.success({
                message: "Đăng nhập thành công!",
                description: "Bạn đã đăng nhập thành công. Chào mừng bạn!",
            });
            navigate(from, { replace: true });
        } catch (error) {
            notification.error({
                message: "Đăng nhập thất bại!",
                description: error.message,
            });
        }
    };

    const handleRegister = async () => {
        alert("Đăng nhập với Google chưa được hỗ trợ");
    };

    return (
        <div className="bg-[#f7f5f5] lg:min-h-[80vh]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-6 py-12 lg:py-16 lg:pr-10">
                    <div className="lg:col-span-2  lg:col-start-3">
                        <div className="px-4 py-4 bg-white rounded-lg">
                            <div className="max-w-md mx-auto">
                                <h1 className="text-2xl font-semibold">
                                    Đăng nhập
                                </h1>
                                <form
                                    onSubmit={handleSignIn}
                                    className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                                >
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <p>
                                        Nếu bạn chưa có tài khoản. Vui lòng{" "}
                                        <Link
                                            to="/sign-up"
                                            className="text-blue-600 underline"
                                        >
                                            Đăng ký
                                        </Link>{" "}
                                        ở đây
                                    </p>
                                    <button className="bg-[#ED553B] w-full text-white rounded-md px-2 py-1">
                                        Đăng nhập
                                    </button>
                                </form>

                            </div>
                            <hr />
                            <div className="flex w-full items-center flex-col mt-5 gap-3">
                                <button
                                    onClick={handleRegister}
                                    className="block"
                                >
                                    <img
                                        src={googleLogo}
                                        alt=""
                                        className="w-12 h-12 inline-block"
                                    />
                                    Login with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
