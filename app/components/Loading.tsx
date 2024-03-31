import { motion } from "framer-motion";
import Image from "next/image";

export default function Curtain() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <Image className="invert" src={"/metrol.png"} alt="loading" height={300} width={300} />
      <motion.div
        className="bg-[#3a8fff] w-[10rem] h-2 mt-4"
        initial={{ width: 0 }}
        animate={{ width: "20rem" }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
