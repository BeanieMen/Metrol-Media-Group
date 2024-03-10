import Image from "next/image"

export default function Hero() {
    return <>
        <div className="bg-black text-white text-5xl md:text-6xl text-center py-20">
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
        </div></>
}