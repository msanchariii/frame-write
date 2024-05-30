import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="w-full">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl text-wrap text-center font-serif my-4">
                SANCHAR<span className="italic">I</span>
                {"   "}
                <span className="text-[#ddf247]">MANDAL</span>
            </h1>
            <h2 className="text-3xl md:text-5xl text-wrap text-center my-4 text-[#f4f4f2]/40">
                {/* Let&apos;s Connect */}
                CAPTURING LIFE&apos;S ESSENCE THROUGH LENSE
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-6">
                <div className="w-full md:w-96 relative h-80 overflow-hidden rounded-xl">
                    <Image
                        src={`https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D`}
                        alt={`hero-image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="w-1/2 border grow rounded-xl p-6">
                    <div className="flex flex-col justify-between h-full gap-y-4">
                        <h2 className="text-2xl text-[#ddf247]">
                            50 + <br /> Happy Clients
                        </h2>
                        <p className="pr-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid ad voluptates ea nihil aliquam unde
                            fugiat perferendis adipisci ducimus doloremque!
                        </p>
                        <div className="p-4 border w-44 rounded-full text-center">
                            Let&apos;s Connect
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
    return (
        <div className="bg-[#f4f4f2] text-[#101010] w-full py-12 px-12 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-y-8">
                <div className="w-1/2">
                    <h1 className=" text-4xl font-serif text-left">About Me</h1>
                </div>
                <div className="w-full md:w-1/2 text-[#101010]">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quasi vero possimus atque pariatur consequuntur
                        eos nobis voluptate minima, mollitia deleniti,
                        laboriosam quisquam voluptates harum magni illum
                        aspernatur incidunt obcaecati quam, voluptas consectetur
                        enim! Accusantium fugiat totam nesciunt, aspernatur
                        nostrum minima obcaecati numquam maxime labore nisi
                        quisquam rem veritatis dolor ea!
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-14">
                {/* 3 images */}
                <div className="w-full md:w-1/3 m-2 relative h-72 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXNjYXBlfGVufDB8MHwwfHx8MA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fill rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/3 m-2 relative h-72 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fill rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/3 m-2 relative h-72 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1507090960745-b32f65d3113a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fill rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

const FeaturedWorks = () => {
    return (
        <div className="p-12">
            <div>
                <h1 className="text-[#f4f4f2] text-4xl font-serif">
                    Featured Works
                </h1>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="w-full m-2 relative h-24 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1584204559709-ca7d413229eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="w-full  m-2 relative h-24 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="w-full m-2 relative h-24 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1512425406684-952ff74cb8d1?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="w-full  m-2 relative h-24 overflow-hidden rounded-md">
                    <Image
                        src={`https://images.unsplash.com/photo-1593704212686-6d52058fb516?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt="img 1"
                        fill
                        sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};
const CapturingMoments = () => {
    return (
        <>
            <div className="bg-[#f4f4f2] w-full p-12 rounded-3xl">
                <div>
                    <h1 className="text-[#101010] text-4xl text-center font-bold font-serif">
                        Capturing Lif&apos;s Intimate Moments
                    </h1>
                    <p className="text-[#101010] text-center my-2 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, consequuntur consectetur. Enim quas
                        tempora ratione.
                    </p>
                </div>
                <div className="grid grid-cols-5 grid-rows-5 gap-x-4 my-12">
                    <div className="col-start-1 row-start-2 row-span-3 h-48 rounded-md relative overflow-hidden">
                        <Image
                            src={images.moments[0]}
                            alt="img 1"
                            fill
                            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="col-start-2 row-span-4 rounded-md relative overflow-hidden">
                        <Image
                            src={images.moments[1]}
                            alt="img 1"
                            fill
                            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="col-start-3 row-span-full rounded-md relative overflow-hidden">
                        <Image
                            src={images.moments[2]}
                            alt="img 1"
                            fill
                            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="col-start-4 row-span-4 rounded-md relative overflow-hidden">
                        <Image
                            src={images.moments[3]}
                            alt="img 1"
                            fill
                            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="col-start-5 row-start-2 row-span-3 rounded-md relative overflow-hidden">
                        <Image
                            src={images.moments[4]}
                            alt="img 1"
                            fill
                            sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
const Testimonials = () => {
    return (
        <div className="p-12 w-full flex justify-between">
            <div className="w-1/2 flex flex-col justify-between">
                <h1 className="text-[#f4f4f2] text-4xl font-serif">
                    Testimonials
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facere delectus ullam modi, quisquam iure commodi dicta nam?
                    Pariatur cupiditate excepturi placeat, exercitationem
                    consequuntur aliquam cum accusamus possimus. Ut, modi sunt!
                    Neque dolores exercitationem voluptate, repellat quas, a est
                    autem reprehenderit recusandae iusto omnis accusamus quod
                    et. Enim voluptate dignissimos explicabo ipsum? Ullam non
                    quia, ut dicta ab hic praesentium eveniet.
                </p>
                <div>
                    <p className="font-semibold text-xl">John Doe</p>
                    <p>XYZ Company</p>
                </div>
            </div>

            <div className="w-1/3 h-96 relative overflow-hidden">
                <Image
                    src={`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt="img 1"
                    fill
                    sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                    className="object-cover rounded-md"
                />
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <>
            <div className="bg-[#f4f4f2] w-full p-12 rounded-3xl">
                <h1 className="text-[#101010] text-4xl font-serif my-12">
                    {" "}
                    Projects{" "}
                </h1>
                <div>
                    <div className="grid grid-cols-3 grid-rows-3  gap-3 text-black ">
                        <div className="bg-red-200 rounded-md relative overflow-hidden aspect-video">
                            <Image
                                src={images.projects[0]}
                                alt="img 1"
                                fill
                                sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="bg-red-200 rounded-md relative overflow-hidden col-start-2">
                            <Image
                                src={images.projects[1]}
                                alt="img 1"
                                fill
                                sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="bg-red-200 rounded-md relative overflow-hidden  col-start-3 row-span-2">
                            <Image
                                src={images.projects[2]}
                                alt="img 1"
                                fill
                                sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="bg-red-200 rounded-md relative overflow-hidden col-span-2">
                            <Image
                                src={images.projects[3]}
                                alt="img 1"
                                fill
                                sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="bg-red-200 rounded-md relative overflow-hidden col-span-full">
                            <Image
                                src={images.projects[4]}
                                alt="img 1"
                                fill
                                sizes="(max-width: 1920px) 100vw, (max-width: 1920px) 50vw, 33vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function page() {
    return (
        <div className="my-6 flex flex-col gap-y-24">
            <Hero />
            <AboutMe />
            <FeaturedWorks />
            <CapturingMoments />
            <Testimonials />
            <Projects />
        </div>
    );
}

const images = {
    featured: [],
    moments: [
        "https://images.unsplash.com/photo-1716795180548-20fd089141df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1715594564891-b4aecdd6e05e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1715179067049-ddadb5f0c985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716224835882-ba9133a9d407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716847214575-4e5a41cdd3da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    projects: [
        "https://images.unsplash.com/photo-1716847214513-dfac4f00635b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716857892405-4a1cc7d34f1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716847214525-bdbcac17f920?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1514454529242-9e4677563e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
};

export default page;
