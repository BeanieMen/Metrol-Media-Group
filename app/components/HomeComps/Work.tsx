import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Work() {
    return (
        <>
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
        </>
    )

}