'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function AboutLetter() {
    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className="grid lg:grid-cols-8 gap-10 md:gap-20 bg-black text-white p-14 rounded-xl items-center shadow-xl cursor-pointer">
                <div className='col-span-4'>
                    <h1 className='text-4xl/normal'>What Does Cinnamon Do You To Face?</h1>
                </div>
                <div className='col-span-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis ratione ex eius quod esse nesciunt architecto ea explicabo aut eveniet, accusamus minus perspiciatis alias voluptas ab eligendi molestiae reprehenderit?</p>
                </div>
                <div className='col-span-1'>
                    <div className='p-1 bg-primary rounded-full border-primary border-2 text-center cursor-pointer transition-all duration-500 hover:bg-black hover:scale-105 hover:border-2 group'>
                        <ArrowRight size={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}