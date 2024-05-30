import Image from "next/image";

const Hero = () => {
    return (
        <>
            {/* Name */}
            <h1 className="text-9xl">
                Sanchari <span>Mandal</span>
            </h1>
        </>
    );
};

export default function Home() {
    return (
        <div className="bg-yellow-200/50 w-full">
            <Hero />
        </div>
    );
}
