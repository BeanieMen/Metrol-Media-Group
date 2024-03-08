import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center py-3">
      <div className="w-full flex justify-between items-center"> {/* Adjusted padding and removed gap */}
        <div className="flex items-center">
          <Image src={"/metrol.png"} className="invert" alt="telescope" width={200}  height={100} /> {/* Adjusted image size */}
        </div>
        <div className="flex gap-2 mx-5">
          <Button className="rounded-full border-black border-0 bg-black hover:bg-white hover:border hover:text-black text-white">
            <p className="text-xl">Call Us</p>
          </Button>
        </div>
      </div>
    </nav>
  );
}
