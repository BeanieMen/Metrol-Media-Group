export default function Podcast() {
  return (
    <div>
      <div className="text-4xl md:text-5xl mx-auto text-center font-bold my-20">
        Watch our latest piece of work with{" "}
        <span className="underline decoration-blue-600 underline-offset-2 decoration-[7px]">
          Aman Joshi
        </span>
      </div>{" "}
      <div className="w-full">
        <iframe
          className="rounded-2xl mx-auto border-0 w-full md:w-[40vw] h-auto aspect-video"
          src="https://www.youtube.com/embed/4M8kkmttc-o"
        />
      </div>
    </div>
  );
}
