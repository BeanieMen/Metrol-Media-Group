import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black shadow-md py-3">
      <div className="w-full flex justify-between items-center px-2"> {/* Adjusted padding */}
        <div className="flex items-center">
          <Image src={"/metrol.png"}alt="telescope" width={200}  height={100} /> {/* Adjusted image size */}
        </div>
        <div className="flex gap-2">
          <Button className="rounded-full border-white border bg-black hover:bg-white hover:border hover:text-black text-white">
            <p className="text-xl">Call Us</p>
          </Button>
        </div>
      </div>
    </nav>
  );
}
