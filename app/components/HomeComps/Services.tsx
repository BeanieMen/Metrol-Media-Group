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
            <div className="py-28">
                <div className="text-white text-center text-4xl md:text-6xl font-bold mb-10">Our Services</div>

                <div className="grid grid-cols-1  md:grid-cols-2 mx-[5vw] lg:mx-[22.5vw] gap-40">
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
        </>

    )
}