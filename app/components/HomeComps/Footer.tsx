import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#272F71] mt-10 px-5 h-fit py-6 pb-24">
        <div className="pt-10 flex flex-col max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <Image
              src={"/metrol.png"}
              alt="telescope"
              className="mx-auto"
              width={100}
              height={100}
            />
            <span className="mt-5 text-center">
              Maximize brand potential with expert social media management and
              advertising.
            </span>
          </div>
          <div className="mx-auto flex gap-5 mt-5">
            <Link href={"https://instagram.com"}>
              <Instagram className="size-10"></Instagram>
            </Link>
            <Link href={"https://linkedin.com"}>
              <Linkedin className="size-10"></Linkedin>
            </Link>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 bg-opacity-30 w-screen -ml-5 mt-5"></div>
        <div className="flex justify-center items-center font-bold mt-3">
          <span>© 2024 Metrol Media</span>
        </div>
      </div>
      <div className="w-full fixed bottom-0 left-0 z-50 rounded-t-3xl border border-b-0 border-l-0 border-r-0 h-20 border-gray-600 bg-[#20255E]">
        <div className="flex justify-between items-center h-full py-3 max-w-5xl mx-auto">
          <div className="mx-5 flex justify-between w-full">
            <div className="text-lg font-bold flex-col">
              <div>Work With Us</div>
              <div className="text-[12px] font-normal">
                2 spots remaining for April 2024
              </div>
            </div>
            <div>
              <Button className="text-white rounded-full text-xl bg-[#4437f7]">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
