import Image from "next/image";
import { Teko } from "next/font/google";
const teko = Teko({subsets: ["latin"]})

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Hero() {
  return (
    <div className="flex-col bg-gradient-to-b from-[#0F151D] to-[#102e66] h-fit">
      <div className="flex justify-center pt-10 z-10">
        <Image src={"/metrol.png"} alt="telescope" width={200} height={200} />
      </div>
      <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-lg relative z-20 mt-5 ">
          <div className="w-fit px-5 py-3 text-white text-xl mx-auto border-gray-500 border font-bold rounded-full bg-gray-500 bg-opacity-30 -mb-5">
            No Hassle or Difficulty. Just one Goal -
            <span className="text-white text-xl font-bold rounded-full bg-pink-500 px-2 py-[0.25rem]">
              Profits
            </span>
          </div>
          {/* Adjusted margin-top to move the text content up */}
          <div className="text-white text-4xl text-center pt-20">
            <div className="mb-4">
              Leading Performance Marketing Agency behind India&apos;s biggest
              Creators
            </div>
            <div className={`text-3xl mt-5 mb-10 font-extralight ${teko.className}`}>
              Forge ahead in the digital realm with Delhi&apos;s finest
              marketing mavens.
            </div>
            <Button className="text-white rounded-full text-2xl bg-[#4437f7]">
              Work With Us
            </Button>
          </div>
        </div>
      </div>

      <BackgroundBeams/>
    </div>
  );
}
