import Image from "next/image";
export default function Home() {
  return (
    <main classname>
      {/* Hero Section */}
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "calc(100rem - 60rem)", // Increased height
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw4Nnx8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHx8fDE3MDY4MDk0MTh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 text-white text-5xl flex justify-start items-start px-4 py-16 item-center">
          {" "}
          {/* Increased padding */}
          <div className="flex flex-col ml-[10%] justify-center my-auto">
            <div>Elevate Your Brand's</div>
            <div>Presence</div>
            <div className="text-2xl mt-14">
              {" "}
              {/* Increased margin */}
              Forge ahead in the digital realm with Delhi's finest marketing
              mavens.
            </div>
          </div>
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="flex flex-col mx-10 gap-y-10 text-black mt-24">
        <div className="text-4xl font-bold">Recent Work</div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-y-5">
            <Image
              className="rounded-sm"
              src={"/ache.webp.webp"}
              width={400}
              height={400}
              alt={"achiever"}
            />
            <div className="text-2xl font-bold">Lead Generation</div>
            <div className="text-lg font-light">
              Generated 500,000+ leads in top cities for "Achievers Club,"
              promoting Forever Living Products's nutraceuticals. Achieved 40%+
              positive lead feedback and 2% enrollment rate. Ongoing Meta ad
              campaign scaling effectively.
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="text-3xl text-black mx-10 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:w-1/2">
          <div className="text-5xl font-bold mb-6">About Us</div>
          <div className="mt-4 md:mt-0">
            Expertising Media & Marketing since 2019
          </div>
          <ul className="list-disc ml-10 mt-5 font-light text-lg">
            <li>Largest Studio with 50+ Setups in Delhi NCR</li>
            <li>100+ successful social media accounts</li>
            <li>2.5 Cr+ annual meta ads spent</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            className="rounded-lg"
            src="/about.jpg"
            width={500}
            height={400}
            alt="about"
          />
        </div>
      </div>
    </main>
  );
}
