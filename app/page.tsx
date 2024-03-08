import Image from "next/image";
import { Chakra_Petch } from "next/font/google";
const pacifico = Chakra_Petch({ weight: '400', subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "calc(100rem - 50rem)", // Increased height
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw4Nnx8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHx8fDE3MDY4MDk0MTh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 text-white text-6xl flex justify-start items-start px-4 py-16 item-center">
          <div className={`flex flex-col ml-[10%] justify-center my-auto ${pacifico.className}`}>
            <div>Elevate Your Brand&apos;s</div>
            <div>Presence</div>
            <div className="text-2xl mt-14 ">
              Forge ahead in the digital realm with Delhi&apos;s finest marketing
              mavens.
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="flex-col py-5 my-[7.5rem]">
  <div className="flex justify-center mx-auto text-black font-semibold text-6xl">
    Our Services
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 my-[5rem] md:mx-20">

    <div className="flex flex-col items-center text-black bg-white rounded-lg shadow-2xl p-8">
      <p className="font-bold text-3xl mb-6">CONTENT AND MEDIA MARKETING</p>
      <p className="text-xl font-bold mb-6">For Content Creators, Brands, and More</p>
      <p className="font-light text-gray-900">
        Elevate your brand's online presence with our comprehensive Content and Media Marketing services. From engaging social media campaigns to compelling blog posts and captivating video content, we specialize in crafting strategies that resonate with your audience. Let our experts drive traffic, increase engagement, and ultimately boost conversions, helping you stand out in today's competitive digital landscape.
      </p>
    </div>

    <div className="flex flex-col items-center text-black bg-white rounded-lg shadow-2xl p-8">
      <p className="font-bold text-3xl mb-6">META ADS</p>
      <p className="text-xl font-bold mb-6">For Marketers, Brands, and More</p>
      <p className="font-light text-gray-900">
        Elevate your online presence with our cutting-edge Meta Ads service. Our specialized ad campaigns are designed to target your audience effectively across various platforms, maximizing your reach and engagement. Whether you're a small business or a large corporation, our expert team will tailor strategies to suit your specific goals and budget. Let us help you amplify your digital presence and drive measurable results with our innovative advertising solutions.
      </p>
    </div>

  </div>
</div>

      {/* Recent Work Section */}
      <div className="py-10">
        <div className="text-2xl md:text-4xl font-bold text-center text-black">Recent Work</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-20 mt-8">

          <div className="flex flex-col  items-center text-black bg-white rounded-lg shadow-2xl p-8">
            <Image
              className="rounded-xl mb-10"
              src="/ache.webp.webp"
              width={400}
              height={400}
              alt={"achiever"}
            />
            <div className="text-xl font-bold my-4">Lead Generation</div>
            <div className="font-light text-gray-900">
              Generated 500,000+ leads for "Achievers Club", promoting Forever Living Products's nutraceuticals. Achieved 40%+ positive lead feedback and 2% enrollment rate. Ongoing Meta ad campaign scaling effectively.
            </div>
          </div>
          {/* Add more recent work cards here */}
        </div>
      </div>

      {/* About Us Section */}
      <div className="text-3xl text-black mx-10 md:mx-[7rem] py-20 flex flex-col md:flex-row items-center justify-center gap-10">
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
