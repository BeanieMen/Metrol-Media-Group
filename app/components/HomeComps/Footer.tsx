import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#272F71] mt-10 px-5 h-fit py-6">
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
  );
}
