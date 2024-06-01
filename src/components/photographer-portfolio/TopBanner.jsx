import Image from "next/image";
import React from "react";

function TopBanner({ heading, text }) {
    return (
        <>
            <div className="relative w-full h-72 overflow-hidden my-6 rounded-xl bg-[#191a1a]">
                <Image
                    fill
                    alt="heading image"
                    src="https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col lg:flex-row gap-y-8 p-8 lg:p-12">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-5xl font-serif text-[#ddf427]">
                        {heading}
                    </h1>
                </div>
                <div className="w-full lg:w-1/2 text-lg">
                    <p>
                        {!text && (
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Similique nemo ipsam a
                                praesentium. Harum inventore, illum aspernatur
                                tempore aut natus doloremque iure asperiores quo
                                provident. Iste neque fuga odit ex asperiores,
                                eos vel doloribus natus quod voluptatibus error
                                a. Aliquid accusamus vero, nam magni tempore
                                tenetur eveniet incidunt fugiat quas?
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}

export default TopBanner;
