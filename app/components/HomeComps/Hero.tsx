import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-[#081835] via-black to-[#081835] pb-20">
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-10">
        <Image src={"/metrol.png"} alt="telescope" width={200} height={200} />
      </div>
      <AuroraBackground>
        <div className="max-w-xl relative z-20 mt-10 pt-16 ">
          <div className="w-fit px-5 py-3 text-white text-xl mx-auto border-gray-500 border font-bold rounded-full bg-gray-500 bg-opacity-30 -mb-5">
            No Hassle or Difficulty. Just one Goal -{" "}
            <span className="text-white text-xl font-bold rounded-full bg-pink-500 px-2 py-[0.25rem]">
              Profits
            </span>
          </div>
          {/* Adjusted margin-top to move the text content up */}
          <div className="text-white text-4xl md:text-5xl text-center py-20">
            <div className="mb-4">
              Leading Performance Marketing Agency behind India&apos;s biggest
              <span className="font-bold">
                &nbsp; Creator&apos;s
              </span>
            </div>
            <div className="text-xl md:text-4xl mb-10 font-extralight">
              Forge ahead in the digital realm with Delhi&apos;s finest
              marketing mavens.
            </div>
            <Button className="text-white rounded-full text-2xl bg-[#4437f7]">
              Work With Us
            </Button>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
