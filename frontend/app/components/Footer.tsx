import React from "react";
import logo from "@/public/logo1.png";
import { FaFacebookF, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-[#d1d5dc] place-items-start">
                    <div className="lg:col-span-1 mb-6">
                        <a href="#" className="sr-only">Cinnamon Essential Oil Project</a>
                        <img src={logo.src} alt="essential oil logo" width={200} height={60} className="brightness-0 invert mb-5" />
                        <p className="font-medium text-sm leading-6 mb-6">Premium 100% pure, organic cinnamon essential oil. Experience the natural healing power of authentic aromatherapy with our carefully sourced and expertly crafted products.</p>
                        <div className="space-y-3 mb-6">
                            <span className="flex items-center gap-3">
                                <FaPhoneAlt className="w-4 h-4 text-primary" /> +1 (555) 123-4567
                            </span>
                            <span className="flex items-center gap-3">
                                <MdEmail className="w-4 h-4 text-primary" /> info@cinnamonoil.com
                            </span>
                            <span className="flex items-center gap-3">
                                <FaMapMarkerAlt className="w-4 h-4 text-primary" /> 123 Wellness St, Natural City, NC 12345
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <FaGithub className="text-2xl" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <FaTwitter className="text-xl" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <FaYoutube className="text-xl" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <FaInstagram className="text-xl" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <div className="space-y-3">
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Home
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                About Us
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Products
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Benefit
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Testimonials
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Our Products</h3>
                        <div className="space-y-3">
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Pure Cinnamon Oil
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Organic Blends
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Aromatherapy Sets
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Gift Collections
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Wellness Kits
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Bulk Orders
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Customer Support</h3>
                        <div className="space-y-3">
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Customer Support
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Shipping Info
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Returns & Refunds
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                FAQ
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Usage Guide
                            </Link>
                            <Link href={"#"} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Safety Information
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}