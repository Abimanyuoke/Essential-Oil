'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function AboutLetter() {
    return (
        <div className='w-4/5 mx-auto'>
            <div className="grid grid-cols-8 bg-black text-white p-14 rounded-lg shadow-lg items-center">
                <div className='col-span-4'>
                    <h1 className='text-4xl/normal'>What Does Cinnamon Do You To Face?</h1>
                </div>
                <div className='col-span-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis ratione ex eius quod esse nesciunt architecto ea explicabo aut eveniet, accusamus minus perspiciatis alias voluptas ab eligendi molestiae reprehenderit?</p>
                </div>
                <div className='col-span-1'>
                    <div className='p-3 bg-primary rounded-full hover:bg-black hover:scale-105 hover:transition-all duration-300 cursor-pointer border-2'>
                        <ArrowRight className='text-' size={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}