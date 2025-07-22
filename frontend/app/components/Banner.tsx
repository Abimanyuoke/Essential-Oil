'use client'
import React from "react";
import { IoPlayOutline } from "react-icons/io5";

export default function Banner() {
    return (
        <div className="bg-gradient-to-t from-primary/40 to-white">
            <div className="container px-5 md: py-10 mx-auto">
                <div className="grid lg:grid-cols-2  gap-10 items-center py-20">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className="text-black font-bold text-8xl">Cinnamon Essential <span className="text-primary">Oil</span></h1>
                        <p className="text-base text-black font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eligendi saepe? Assumenda perferendis in, similique rem unde possimus magnam odio minima mollitia ipsa sunt et dolore provident, accusantium sint! Blanditiis.</p>
                        <div className="flex flex-1 gap-4">
                            <button className="bg-black inline-block text-white font-medium text-base px-6 h-15 rounded-lg hover:bg-primary hover:scale-105 transition-all duration-300">Explore Now</button>
                            <button className="border-primary border-2 rounded-sm px-6 h-15 hover:bg-primary/30 hover:scale-105 transition-all duration-300">
                                <span className="flex items-center gap-2 text-black font-medium text-base py-2 px-6 rounded-lg">
                                    <IoPlayOutline />
                                    How to Buy
                                </span>
                            </button>
                        </div>
                        <div className="">
                            <span></span>
                            <div className="">
                                <p></p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true"></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}