import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="text-white text-center py-20 md:py-20">
                <div className="text-4xl md:text-6xl font-bold mb-20">About Us</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mx-5 md:mx-[7rem]">
                    <div className="flex flex-col justify-center my-auto">
                        <div className="text-2xl font-bold mb-4">Expertising Media & Marketing since 2019</div>
                        <ul className="ml-6 lex flex-col gap-y-2 font-light sm:text-sm lg:text-lg flex flex-wrap">
                            <li className="flex-grow flex-shrink">
                                Largest Studio with 50+ Setups in Delhi NCR
                            </li>
                            <li className="flex-grow flex-shrink">
                                100+ successful social media accounts
                            </li>
                            <li className="flex-grow flex-shrink">
                                2.5 Cr+ annual meta ads spent
                            </li>
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
        </>
    );
}
