import TopBanner from "@/components/photographer-portfolio/TopBanner";
import React from "react";
import { CapturingMoments } from "../page";

function page() {
    const tags = [
        "JOURNALIST",
        "NEW BORN",
        "WEDDING",
        "FASHION",
        "FOOD",
        "SPORT",
        "ARCHITECTURE",
        "STUDIO BUSINESS",
    ];
    const services = [
        "Portrait Photography",
        "Event Coverage",
        "Fine Art Prints",
    ];
    return (
        <div>
            <TopBanner heading={"About Us"} />
            {/* Taking picture means something */}
            <div className="min-h-screen bg-[#f4f4f2] text-[#101010] rounded-2xl p-12 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-serif font-semibold text-5xl">
                            Taking Pictures Always has Meaning
                        </h1>
                        <p className="my-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Autem veniam corporis non rem animi sapiente
                            perspiciatis voluptatem accusamus aperiam ducimus
                            enim ex molestias debitis consectetur provident,
                            facilis ipsa iusto cum error! Saepe rem voluptates
                            ex modi. Sequi, amet perspiciatis? Beatae explicabo
                            nobis voluptates perspiciatis cum ea? Molestiae
                            tempore quia dolorem.
                        </p>
                    </div>
                    {/* tags */}
                    <div>
                        <h2 className="font-bold text-2xl my-4">
                            My Specialities
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="p-2 border border-black rounded-full font-semibold"
                                >
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2"></div>
            </div>
            {/* My Specialities */}
            <div className="min-h-screen text-[#f4f4f2] bg-[#101010] rounded-2xl p-12 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2"></div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-serif font-semibold text-5xl">
                            My Best Signature Services
                        </h1>
                        <p className="my-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus, esse. Amet facere minus commodi saepe
                            libero nulla quidem necessitatibus temporibus magni
                            molestias, officia quam illum? Quis laudantium iusto
                            cumque voluptates.
                        </p>
                    </div>
                    {/* tags */}
                    <div>
                        <h2 className="font-bold text-2xl my-4">My Services</h2>
                        <div className="flex flex-col gap-y-3">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="p-2 border-b font-semibold"
                                >
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Life's Intimate Moments */}
            <CapturingMoments />
            <div></div>
        </div>
    );
}

export default page;
