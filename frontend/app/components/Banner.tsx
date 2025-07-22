'use client'
import React from "react";
import { IoPlayOutline } from "react-icons/io5";

export default function Banner() {
    return (
        <div className="cotainer">
            <div className="grid grid-cols-2 gap-10 item center">
                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 className="text-black font-bold text-8xl">Cinnamon Essential Oil</h1>
                    <p className="text-base text-black font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eligendi saepe? Assumenda perferendis in, similique rem unde possimus magnam odio minima mollitia ipsa sunt et dolore provident, accusantium sint! Blanditiis.</p>
                    <div className="flex flex-1 ">
                        <button className="bg-black text-white font-medium text-base py-2 px-6 rounded-lg hover:bg-primary hover:scale-105 transition-all duration-300">Explore Now</button>
                        <button className="border-primary rounded-lg hover:bg-primary/30 hover:scale-105 transition-all duration-300">
                            <span className="flex items-center gap-2 text-black font-medium text-base py-2 px-6 rounded-lg">
                                <IoPlayOutline/>
                                How to Buy
                            </span>
                        </button>
                    </div>
                    <div className=""></div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}