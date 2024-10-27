import React from "react";
import map from "../assets/map.png";

const Contact = () => {
    return (
        <div className="px-4 lg:px-24">
            <div className="my-5 flex justify-between w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
                {/* Left Section (Form) */}
                <div className="w-2/3 p-10 pr-48">
                    <h1 className="text-4xl font-bold mb-2">
                        Get in <span className="text-[#ED553B]">touch</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                        molestie vel, ornare non id blandit netus.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Contact name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Street"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Postcode"
                                className="w-1/2 p-3 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Contact Phone"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <textarea
                            placeholder="Let's talk about your idea"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        ></textarea>
                        <div className="mt-4">
                            <label
                                htmlFor="file-upload"
                                className="block text-gray-600 mb-2"
                            >
                                Upload Additional file
                            </label>
                            <input
                                type="file"
                                id="file-upload"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <p className="text-sm text-gray-500">
                                Attach file. File size of your documents should not exceed 10MB.
                            </p>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                id="nda"
                                className="mr-2"
                            />
                            <label htmlFor="nda" className="text-gray-600">
                                I want to protect my data by signing an NDA
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ED553B] text-white p-3 rounded-lg mt-6"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Section (Map) */}
                <div className="w-1/3 py-14 bg-[#ED553B]">
                    <img
                        src={map}
                        alt="Map"
                        className="w-full h-full rounded-xl object-cover ml-[-120px]"
                    />
                </div>
            </div>
        </div>

    );
};

export default Contact;
