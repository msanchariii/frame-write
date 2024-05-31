"use client";
import Link from "next/link";
import React, { useState } from "react";

const links = [
    { id: 1, pathname: "HOME", path: "/" },
    { id: 2, pathname: "ABOUT ME", path: "/about-me" },
    { id: 3, pathname: "FEATURED WORKS", path: "/featured-works" },
    { id: 4, pathname: "PROJECTS", path: "/projects" },
    { id: 5, pathname: "BLOGS", path: "/blogs" },
];

const NavLink = ({ pathName, path }) => {
    return (
        <div className="rounded-full min-w-20 text-[#f4f4f2da] font-semibold text-sm border border-white py-2 px-3 text-center">
            <Link href={`/photographer-portfolio${path}`}>{pathName}</Link>
        </div>
    );
};

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };
    return (
        <div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full flex-col md:flex-row px-2 py-6 md:p-6 justify-between gap-y-4">
                <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-4">
                    {links.map((link) => (
                        <NavLink
                            key={link.id}
                            path={link.path}
                            pathName={link.pathname}
                        />
                    ))}
                </div>
                <div className="underline underline-offset-8 decoration-[#ddf247] text-center md:text-right">
                    Let&apos;s Connect
                </div>
            </div>
            {/* Hamburger for mobile */}
            <div className="md:hidden py-8 px-3" onClick={handleToggleNavbar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu cursor-pointer"
                >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </div>
            {/* Mobile Menu */}
            {navbarOpen && (
                <div className="md:hidden flex flex-col items-center text-white p-4">
                    {links.map((link) => (
                        <div key={link.id} className="my-2">
                            <Link
                                className="focus:text-[#ddf247]"
                                href={link.path}
                            >
                                {link.pathname}
                            </Link>
                        </div>
                    ))}
                    <div className="text-[#f4f4f2] underline underline-offset-8 decoration-[#ddf247] text-center mt-4">
                        Let&apos;s Connect
                    </div>
                </div>
            )}
        </div>
    );
}

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
