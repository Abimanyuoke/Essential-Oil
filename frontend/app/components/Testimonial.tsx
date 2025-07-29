import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Testimonial() {
    return (
        <div className='py-20 md:my-20'>
            <div className="pb-20">
                <h2 className="font-semibold text-4xl md:text-5xl text-black text-center">Client Testimonials</h2>
                <div className="w-48 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}