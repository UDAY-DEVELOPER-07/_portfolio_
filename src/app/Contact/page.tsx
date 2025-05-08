"use client"
import React from "react";
import img4 from "../../../public/images/img4.jpg";


export default function Contact() {
    return (
        <>
            <style jsx global>{`
            .bg-url {
              background-image: url(${img4.src});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 0.9;
              z-index: -1;
            }
          `}</style>
            <div className="flex bg-url items-center justify-center h-screen">
                <div className="absolute flex flex-col justify-center items-center backdrop-blur-xl rounded-2xl shadow-2xl w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] h-auto backdrop-blur-3xl border border-[#FFF7E5] rounded-2xl p-6 md:p-8 lg:p-10">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-8">We would love to hear from you!</p>
                <form className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows={4}
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
                </div>
            </div>
        </>
    );
}