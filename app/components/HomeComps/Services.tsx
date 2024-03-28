import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <>
      <div className=" px-4 md:px-0 flex justify-center bg-gradient-to-b from-[#102e66]  via-[#0F151D] to-[#0F151D]">
        <div>
          <div className="text-white text-center text-4xl md:text-5xl font-bold mb-20">
            Our{" "}
            <span className="underline decoration-blue-600 decoration-[10px]">
              Services
            </span>
          </div>

          <div className="flex flex-col gap-y-10 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-x-5  bg-[#161a42] p-5 bg-opacity-60 rounded-2xl border border-gray-700">
              <div className="flex-shrink-0 md:order-1">
                <Image
                  className="rounded-xl mx-auto"
                  src="https://scalex.club/wp-content/uploads/2024/03/compres.gif"
                  alt="gif"
                  width={350}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center md:order-0">
                <h1 className="text-3xl font-bold mx-auto md:mx-0 mt-5">Performance Marketing</h1>
                <p className="text-xl mt-3">
                  Boost your monthly profits and outrank your competition with
                  the help of our Coaching Industry Experienced Account
                  Managers. We do media buying for you on Meta & Google.{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-x-5  bg-[#161a42] p-5 bg-opacity-60 rounded-2xl border border-gray-700">
              <div className="flex flex-col justify-center md:order-1">
                <h1 className="text-3xl font-bold mx-auto md:mx-0 mt-5">Meta Ads</h1>
                <p className="text-xl mt-3">
                  Elevate your brand with Meta Ads. Tailored campaigns for all
                  sizes. Maximize online presence with top-notch advertising
                  strategies. Boost engagement today!
                </p>
              </div>
              <div className="flex-shrink-0 md:order-0">
                <Image
                  className="rounded-xl mx-auto"
                  src="https://scalex.club/wp-content/uploads/2024/03/BusinessStrategy-ezgif.com-video-to-gif-converter.gif"
                  alt="gif"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gradient-to-b from-[#0F151D] to-[#102e66] pb-20">
        <Button className="text-white rounded-full px-10 text-2xl w-fit mx-auto bg-[#4437f7]">
          Lets Talk
        </Button>
        <div className="mx-auto mt-5 font-light">
          Connect with us to scale your business
        </div>
      </div>
    </>
  );
}
