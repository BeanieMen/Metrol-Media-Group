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
      <main className=" md:px-0">
        <ScrollAnimation>
          <Hero></Hero>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="w-full h-20 bg-[#102e66]"></div>
        </ScrollAnimation>

        <ScrollAnimation>
          <Services></Services>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-b  from-[#102e66] to-[#0F151D]">
            <div className="max-w-3xl flex bg-[#1F2563] mx-auto py-10 px-5 rounded-xl bg-opacity-50 border border-gray-700">
              <div className="bg-[#474BFA] font-bold p-10 pr-28 w-fit rounded-l-[2500px] rounded-r-full ">
                <div className="text-md max-w-[15rem]">
                  No Difficulty. <br /> Just one Goal -
                </div>
                <div className="text-3xl">Profits</div>
              </div>

              <div className="max-w-xl flex ml-5 text-lg my-auto flex-col">
                We are hyper focused on increasing your profits, month over
                month. <br />
                <span>
                  <span className="bg-gray-400 bg-opacity-25 w-fit px-2 rounded-md">
                    No fluff. High impact. No ad spend wasted.
                  </span>{" "}
                  We leverage learnings from thousands of experiments with
                  successful EdTech brands and Coaches to create a robust
                  marketing engine which generates compounding growth for your
                  business, rather than linear growth.
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimation>


        {/* Testimonial Section */}
        <ScrollAnimation>
          <div className="flex flex-col mt-20 w-screen">

          <TestimonialSlider testimonials={testimonials} />
          <TestimonialSlider testimonials={testimonials.reverse()} />
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <About></About>
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
