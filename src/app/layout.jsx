import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/photographer-portfolio/Navbar";
import Footer from "@/components/photographer-portfolio/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sanchari M.",
    description: "My Front-End Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="w-full bg-[#101010] px-2 md:px-6 xl:px-8 2xl:px-48">
                    <Navbar />
                    {/* separation */}
                    <hr className="w-full bg-[#f4f4f2]/20" />
                    <main className="bg-[#101010]">{children}</main>
                    {/* <NavLink pathName={`Yo`} path={`/`} /> */}
                    <hr className="w-full bg-[#f4f4f2]/20 mt-12 mb-6" />
                    <Footer />
                </main>
            </body>
        </html>
    );
}
