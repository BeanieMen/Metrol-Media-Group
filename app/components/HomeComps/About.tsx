import Video from 'next-video';

export default function About() {
  return (
    <>
      <div className="text-white text-center py-20 md:py-20">
        <div className="text-4xl md:text-5xl font-bold mb-20">
          What our clients have to say <br /> about us
        </div>
        <div className="max-w-5xl mx-auto gap-20 flex justify-center">
          <div className="justify-right">
            <Video
              className="rounded-t-2xl border-0"
              src="https://scalex.club/wp-content/uploads/2024/01/Ankur-Testimonial.mp4"
            />

            <div className="flex-col flex  bg-[#474BFA] bg-opacity-50 py-5 rounded-b-2xl">
              <span className="flex text-3xl font-bold items-center mx-auto">
                Ankur Warikoo
              </span>
              <span className="text-2xl font-bold">
                Serial Entrepreneur & Content Creator
              </span>
            </div>
          </div>

          <div className="justify-center">
            <Video
              className="rounded-t-2xl border-0"
              src="https://scalex.club/wp-content/uploads/2024/01/Purushottam-Testimonial.mp4"
            />

            <div className="flex-col flex  bg-[#474BFA] bg-opacity-50 py-5 rounded-b-2xl">
              <span className="flex text-3xl font-bold items-center mx-auto">
                Ankur Warikoo
              </span>
              <span className="text-2xl font-bold">
                Serial Entrepreneur & Content Creator
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
