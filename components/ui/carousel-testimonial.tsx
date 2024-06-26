"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};
interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const imageLoader = ({ src, width, quality = 75 }: ImageLoaderParams): string =>
  `${src}?w=${width}&q=${quality}`;

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
        <div className="mx-auto px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col px-4 py-5 sm:p-6 bg-[#1B214E] h-60 bg-opacity-70 rounded-xl border-gray-700 border">
                    <div className="mt-6 flex gap-3">
                      <span className="inline-flex rounded-full">
                        <Image
                          loader={imageLoader}
                          className="h-10 w-10 rounded-full"
                          height={40}
                          width={40}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q className="flex-1 mt-5 text-gray-600 dark:text-gray-300">
                      {testimonial.quote}
                    </q>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" /> */}
            {/* <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" /> */}
          </Carousel>
        </div>
      </section>
    </>
  );
}
