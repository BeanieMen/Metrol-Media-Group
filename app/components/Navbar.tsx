import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black shadow-md py-3">
      <div className="w-full flex justify-between items-center  md:px-8"> {/* Adjusted padding for responsiveness */}
        <div className="flex items-center px-2">
          <Image src={"/metrol.png"} alt="telescope" width={150} height={100} /> {/* Adjusted image size */}
        </div>
        <div className="flex md:hidden gap-2 px-4"> {/* Show on small screens only */}
          <Button className="rounded-full border-white border bg-black hover:bg-white hover:border hover:text-black text-white"> {/* Adjusted button size */}
            <p className="text-sm">Call Us</p> {/* Adjusted text size */}
          </Button>
        </div>
        <div className="hidden md:flex gap-2 px-4"> {/* Hide on small screens */}
          <Button className="rounded-full border-white border bg-black hover:bg-white hover:border hover:text-black text-white"> {/* Adjusted button size */}
            <p className="text-sm">Call Us</p> {/* Adjusted text size */}
          </Button>
        </div>
      </div>
    </nav>
  );
}
