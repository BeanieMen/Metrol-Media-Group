import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-3">
      <div className="w-full flex justify-between items-center px-5"> {/* Adjusted padding */}
        <div className="flex items-center">
          <Image src={"/metrol.png"} className="invert" alt="telescope" width={200}  height={100} /> {/* Adjusted image size */}
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
