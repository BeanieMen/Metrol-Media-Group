import Image from "next/image";
import { Chakra_Petch } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TestimonialSlider, { Testimonial } from "@/components/ui/carousel-testimonial"

const pacifico = Chakra_Petch({ weight: '400', subsets: ["latin"] });

const testimonials: Testimonial[] = [
  {
    quote:
      "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
    name: "Rose Roberson",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
];


export default function Home() {
  return (
    <main className="px-4 py-10 md:px-0">
      {/* Hero */}
      <div className="bg-black text-white text-5xl md:text-6xl text-center py-40">
        <div className="font-bold mb-4">Elevate Your Brand&apos;s Presence</div>
        <div className="text-2xl md:text-4xl mb-10">
          Forge ahead in the digital realm with Delhi&apos;s finest marketing mavens.
        </div>
        <Image
          className="mx-auto min-w-full"
          src="/hero.png"
          width={864}
          height={292}
          alt="hero"
        />
      </div>

      {/* Our Services */}
      <div className="py-20">
        <div className="text-white text-center font-semibold text-4xl mb-10">Our Services</div>

        <div className="grid grid-cols-1  md:grid-cols-2 mx-[5vw] lg:mx-[25vw] gap-40">
          <Card className="bg-gray-950">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">CONTENT AND MEDIA MARKETING</CardTitle>
              <CardDescription>For Content Creators, Brands, and More</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-light">
                Elevate your brand&apos;s online presence with our comprehensive Content and Media Marketing services. From engaging social media campaigns to compelling blog posts and captivating video content, we specialize in crafting strategies that resonate with your audience. Let our experts drive traffic, increase engagement, and ultimately boost conversions, helping you stand out in today&apos;s competitive digital landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-950">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">META ADS</CardTitle>
              <CardDescription>For Marketers, Brands, and More</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-light">
                Elevate your online presence with our cutting-edge Meta Ads service. Our specialized ad campaigns are designed to target your audience effectively across various platforms, maximizing your reach and engagement. Whether you&apos;re a small business or a large corporation, our expert team will tailor strategies to suit your specific goals and budget. Let us help you amplify your digital presence and drive measurable results with our innovative advertising solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="py-20 bg-black">
        <div className="text-white text-center text-4xl md:text-6xl font-bold mb-10">Recent Work</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-20 mt-8">
          <Card className="bg-gray-950 text-white">
            <div className="w-auto">
              <Image
                className="rounded-xl my-6 mx-auto"
                src="/ache.webp.webp"
                width={400}
                height={400}
                alt="achiever"
              />
            </div>
            <CardContent>
              <div className="flex text-xl font-bold mb-4 justify-center">Lead Generation</div>
              <div className="text-wrap">
                Generated 500,000+ leads for &quot;Achievers Club&quot;, promoting Forever Living Products&apos;s nutraceuticals. Achieved 40%+ positive lead feedback and 2% enrollment rate. Ongoing Meta ad campaign scaling effectively.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* About Us Section */}
      <div className="text-white text-center py-20 md:py-20">
        <div className="text-4xl md:text-6xl font-bold mb-20">About Us</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mx-5 md:mx-[7rem]">
          <div className="flex-col justify-center my-auto">
            <div className="text-2xl font-bold mb-4">Expertising Media & Marketing since 2019</div>
            <ul className=" ml-6 font-light text-lg">
              <li>Largest Studio with 50+ Setups in Delhi NCR</li>
              <li>100+ successful social media accounts</li>
              <li>2.5 Cr+ annual meta ads spent</li>
            </ul>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/about.jpg"
              width={500}
              height={400}
              alt="about"
            />
          </div>
        </div>
      </div>

      <div>
        <TestimonialSlider testimonials={testimonials}/> 
      </div>
    </main>

  );
}
