"use client";

import Services from "./HomeComps/Services";
import TestimonialSlider, {
  Testimonial,
} from "@/components/ui/carousel-testimonial";
import Navbar from "./Navbar";
import Hero from "./HomeComps/Hero";
import Work from "./HomeComps/Work";
import About from "./HomeComps/About";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ScrollAnimation({ children }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, translateY: "5%", transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
    name: "Rose Roberson",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
];

export default function Home() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <main className=" md:px-0">
        {/* Hero */}
        <ScrollAnimation>
          <Hero></Hero>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="w-full h-20 bg-[#081835]"></div>
        </ScrollAnimation>

        {/* Our Services */}
        <ScrollAnimation>
          <Services></Services>
        </ScrollAnimation>

        {/* Recent Work Section */}
        <ScrollAnimation>
          <Work></Work>
        </ScrollAnimation>

        {/* About Us Section */}
        <ScrollAnimation>
          <About></About>
        </ScrollAnimation>

        {/* Testimonial Section */}
        <ScrollAnimation>
          <div className="flex flex-col mt-20">
            <div className="text-white text-center text-4xl md:text-6xl font-bold mb-10">
              Testimonials
            </div>

            <TestimonialSlider testimonials={testimonials} />
          </div>
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <div className="h-[1px] w-full bg-slate-500"></div>
      <div className="py-20 flex-col text-white font-extralight">
        <p className="flex items-center text-center justify-center  ">
          © 2024 METROL MEDIA PRIVATE LIMITED
        </p>
        <p className="flex items-center text-center  justify-center">
          ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
