import TopBanner from "@/components/photographer-portfolio/TopBanner";
import React from "react";

function page() {
    return (
        <div>
            <TopBanner heading={`Blogs`} />
            <div className="bg-[#f4f4f2] min-h-screen rounded-2xl">
                {/* heading */}
                <div className="text-[#101010] p-12">
                    <h1 className="text-4xl font-serif">Featured Blog</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci quo iure quibusdam suscipit, consequatur odit.
                    </p>
                </div>
                <div>
                    {/* Left Card */}
                    <div></div>
                    {/* right list cards */}
                    <div></div>
                </div>

                {/* heading */}
                <div className="text-[#101010] p-12">
                    <h1 className="text-4xl font-serif">Recent Blogs</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci quo iure quibusdam suscipit, consequatur odit.
                    </p>
                </div>
                <div>{/* blog card -6 - grid */}</div>
            </div>
        </div>
    );
}

export default page;
