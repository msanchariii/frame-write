import Navbar from "@/components/photographer-portfolio/Navbar";
import React from "react";

export const metadata = {
    title: "Photographer Portfolio",
    description: "",
};

const Footer = () => {
    return <div className="w-full min-h-48"></div>;
};

export default function PhotographerPortfolioLayout({ children }) {
    return (
        <div className="bg-[#101010] px-2 md:px-6">
            <Navbar />
            {/* separation */}
            <hr className="w-full bg-[#f4f4f2]/20" />
            <main className="bg-[#101010]">{children}</main>
            {/* <NavLink pathName={`Yo`} path={`/`} /> */}
            <hr className="w-full bg-[#f4f4f2]/20" />
            <Footer />
        </div>
    );
}

// export default PhotographerPortfolioLayout;
// yellow - #ddf247
// white - #f4f4f2
