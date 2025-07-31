import React from "react";
import logo from "@/public/logo.webp";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-1 mb-6">
                        <a href="#" className="sr-only">Cinnamon Essential Oil Project</a>
                        <img src={logo.src} alt="essential oil logo" width={100} height={60} className="brightness-0 invert"   />
                    </div>
                </div>
            </div>
        </footer>
    );
}