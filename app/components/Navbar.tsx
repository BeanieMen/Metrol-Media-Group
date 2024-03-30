import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // If scroll position is greater than 0, set opacity to 1 with a transition
    if (scrollPosition > 0) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [scrollPosition]);

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 rounded-b-3xl border border-t-0 border-l-0 border-r-0"
      style={{
        backgroundColor: `rgba(32, 37, 94, ${opacity})`,
        borderColor: `rgba(75, 85, 99, ${opacity})`,
        transition: "background-color 0.5s, border-color 0.5s",
      }}
    >
      <div className="flex justify-center items-center h-full py-3">
        <Image src={"/metrol.png"} alt="telescope" width={125} height={125} />
      </div>
    </motion.nav>
  );
}
