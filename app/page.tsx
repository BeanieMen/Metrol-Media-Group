
'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "@/app/components/Home";
import Curtain from "@/app/components/Loading";

export default function HomeWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the duration of the loading animation

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <>
    <Home></Home>
      <motion.div
        className="bg-white w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center"
        initial={{ translateY: 0 }}
        animate={{ translateY: "-100vh" }}
        exit={{ translateY: 0 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        style={{ transformOrigin: "bottom left" }}
        onAnimationComplete={handleAnimationComplete}
      >
        <Curtain></Curtain>
      </motion.div>
    </>
  );
}
