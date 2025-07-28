import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="grid grid-cols-2 gap-10 items-center">
            <div>
                <Image
                    src="/images/aboutus.jpg"
                    alt="About Us"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="space-y-10">
                <h1 className="text-7xl font-semibold">About Us</h1>
                <div className="text-black text-base font-medium">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quidem accusantium voluptates a sapiente. Earum quisquam suscipit harum alias consequatur exercitationem, et laudantium animi expedita accusamus quo quam quas vero.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quidem accusantium voluptates a sapiente. Earum quisquam suscipit harum alias consequatur exercitationem, et laudantium animi expedita accusamus quo quam quas vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium tenetur assumenda mollitia dolores nobis sint unde, reiciendis fugit impedit optio!</p>
                </div>
                <button className="bg-black cursor-pointer hover:bg-primary hover:scale-105 transition-all duration-300 shadow-2xl px-3 py-2 text-white text-base font-medium">
                    Read More <ArrowRight size={25} />
                </button>
            </div>
        </div>
    )
}