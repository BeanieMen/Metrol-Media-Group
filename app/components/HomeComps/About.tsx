import TestimonialSlider from "@/components/ui/carousel-testimonial";
import { Testimonial } from "@/components/ui/carousel-testimonial";
import { ScrollAnimation } from "../Home";
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

export default function About() {
  return (
    <div>
      <div className="flex flex-col pt-20 w-screen bg-black">
        <div className="text-4xl md:text-5xl mx-auto text-center font-bold mb-20">
          What our{" "}
          <span className="underline decoration-blue-600 underline-offset-2 decoration-[7px]">
            clients
          </span>{" "}
          say about us ❤️
        </div>
        <div className="mx-auto justify-center gap-20 max-w-5xl grid grid-cols-2">
          <ScrollAnimation>
          <div className="bg-[#1E245C] flex flex-col rounded-xl w-full">
              <iframe
                className="rounded-2xl border-0 w-full h-auto aspect-video"
                src="https://scalex.club/wp-content/uploads/2024/01/Ankur-Testimonial.mp4"
              />
              <div className="pb-5 items-center">
                <span className="flex justify-center text-3xl mt-4 font-bold">
                  Ankur Warikoo
                </span>
                <span className="flex justify-center text-xl">
                  Serial Entrepreneur & Content Creator
                </span>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="bg-[#1E245C] flex flex-col rounded-xl w-full">
              <iframe
                className="rounded-2xl border-0 w-full h-auto aspect-video"
                src="https://scalex.club/wp-content/uploads/2024/01/Purushottam-Testimonial.mp4"
              />
              <div className="pb-5 items-center">
                <span className="flex justify-center text-3xl mt-4 font-bold">
                  Purushottam
                </span>
                <span className="flex justify-center text-xl">
                  Millionaire Course Creator
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
