"use client";

import Services from "./HomeComps/Services";
import Hero from "./HomeComps/Hero";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "./Navbar";
import About from "./HomeComps/About";
import Footer from "./HomeComps/Footer";
import Podcast from "./HomeComps/Podcast";
export function ScrollAnimation({ children }: any) {
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
        hidden: { opacity: 0, translateY: "20%", transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <ScrollAnimation>
          <Hero></Hero>
        </ScrollAnimation>

        <ScrollAnimation>
          <Services></Services>
        </ScrollAnimation>

          <About></About>
          <Podcast></Podcast>
          <Footer></Footer>
      </main>
    </div>
  );
}
