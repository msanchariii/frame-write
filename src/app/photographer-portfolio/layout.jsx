import Link from "next/link";
import React from "react";

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
    return (
        <div className="w-full flex-col md:flex-row flex px-2 py-6 md:p-6 justify-between gap-y-4">
            <div className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-4">
                {links.map((link) => {
                    console.log(link.id);
                    console.log(link.path);
                    console.log(link.pathname);
                    return (
                        <>
                            <NavLink
                                key={link.id}
                                path={link.path}
                                pathName={link.pathname}
                            />
                        </>
                    );
                })}
            </div>
            <div className="underline underline-offset-8 decoration-[#ddf247] text-center md:text-right">
                Let&apos;s Connect
            </div>
        </div>
    );
}

export default function PhotographerPortfolioLayout({ children }) {
    return (
        <div className="bg-[#101010] px-2 md:px-6">
            <Navbar />
            {/* separation */}
            <hr className="w-full bg-[#f4f4f2]/20" />
            <main className="bg-[#101010]">{children}</main>
            {/* <NavLink pathName={`Yo`} path={`/`} /> */}
        </div>
    );
}

// export default PhotographerPortfolioLayout;
// yellow - #ddf247
// white - #f4f4f2
