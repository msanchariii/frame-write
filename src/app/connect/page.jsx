import TopBanner from "@/components/photographer-portfolio/TopBanner";
import React from "react";

function page() {
    return (
        <div>
            <TopBanner heading={"Let us talk"} />
            <div className="text-[#101010] bg-[#f4f4f2] min-h-screen xl:h-auto xl:min-h-96 p-12 flex flex-col justify-between gap-y-6 rounded-2xl">
                <h1 className="text-center text-4xl font-bold font-serif ">
                    Send Us a Message
                </h1>
                <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequatur quas non mollitia <br /> eligendi, nobis debitis
                    ut libero similique corrupti praesentium?
                </p>
                <form action="" className="">
                    <div className=" flex flex-col gap-y-1 mx-auto w-full lg:w-1/2">
                        <label
                            htmlFor=""
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            autoComplete="off"
                        />
                        <label
                            htmlFor=""
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                        />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor=""
                        >
                            Message
                        </label>
                        <input
                            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                        />
                        <button className="bg-[#101010] hover:bg-[#242222] text-white my-4 rounded p-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default page;
