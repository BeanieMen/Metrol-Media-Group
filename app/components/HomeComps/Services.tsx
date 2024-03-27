import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Services() {
    return (
        <>
            <div className="py-8 px-4 md:py-20 md:px-0 flex justify-center bg-graident-to-b bg-gradient-to-b from-[#081835] via-black to-[#081835]">
                <div className="max-w-screen-lg">
                    <div className="text-white text-center text-4xl md:text-5xl font-bold mb-6 md:mb-10">Our <span className="underline decoration-blue-600 decoration-[10px]">Services</span></div>

                    <div className="flex flex-col md:flex-row md:justify-center gap-6 lg:gap-40">
                        <Card className="bg-gray-950 flex-1">
                            <CardHeader>
                                <CardTitle className="font-bold text-xl md:text-3xl">CONTENT AND MEDIA MARKETING</CardTitle>
                                <CardDescription>For Content Creators, Brands, and More</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm md:text-lg font-light">
                                    Elevate your brand&apos;s online presence with our comprehensive Content and Media Marketing services. From engaging social media campaigns to compelling blog posts and captivating video content, we specialize in crafting strategies that resonate with your audience. Let our experts drive traffic, increase engagement, and ultimately boost conversions, helping you stand out in today&apos;s competitive digital landscape.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-950 flex-1 lg:mt-0">
                            <CardHeader>
                                <CardTitle className="font-bold text-xl md:text-3xl">META ADS</CardTitle>
                                <CardDescription>For Marketers, Brands, and More</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm md:text-lg font-light">
                                    Elevate your online presence with our cutting-edge Meta Ads service. Our specialized ad campaigns are designed to target your audience effectively across various platforms, maximizing your reach and engagement. Whether you&apos;re a small business or a large corporation, our expert team will tailor strategies to suit your specific goals and budget. Let us help you amplify your digital presence and drive measurable results with our innovative advertising solutions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
