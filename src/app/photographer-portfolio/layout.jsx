import Footer from "@/components/photographer-portfolio/Footer";
import Navbar from "@/components/photographer-portfolio/Navbar";
import React from "react";

export const metadata = {
    title: "Photographer Portfolio",
    description: "",
};

export default function PhotographerPortfolioLayout({ children }) {
    return (
        <div className="bg-[#101010] px-2 md:px-6">
            <Navbar />
            {/* separation */}
            <hr className="w-full bg-[#f4f4f2]/20" />
            <main className="bg-[#101010]">{children}</main>
            {/* <NavLink pathName={`Yo`} path={`/`} /> */}
            <hr className="w-full bg-[#f4f4f2]/20 mt-12 mb-6" />
            <Footer />
        </div>
    );
}

// export default PhotographerPortfolioLayout;
// yellow - #ddf247
// white - #f4f4f2
