import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center bg-white">
      <div className="w-full flex justify-between items-center py-4 px-10"> {/* Adjusted padding and removed gap */}
        <div className="flex items-center">
          <Image src={"/logo.png"} alt="telescope" width={150} height={150} /> {/* Adjusted image size */}
        </div>
        <div className="flex gap-2">
          <Button className="rounded-full border-black border-0 bg-black hover:bg-white hover:border hover:text-black text-white">
            <p className="text-xl">Call Us</p>
          </Button>
        </div>
      </div>
    </nav>
  );
}
