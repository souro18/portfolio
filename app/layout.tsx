import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaVimeoV } from "react-icons/fa";
import Header from "../component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Soumalina Majumdar",
  description: "Portfolio of soumalina majumdar",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header className="fixed flex w-full justify-between items-center px-4 md:px-20 h-20  z-10">
          <h3 className="text-lg bold">
            <Link href={"/"}>Porfolio</Link>
          </h3>
          <nav>
            <Link href={"/project"}>projects</Link>
          </nav>
        </header> */}
        <Header />
        {children}
        <footer className="flex justify-center m-6 flex-col items-center">
          <div className="flex flex-row">
            <div className="mx-4">
              <a target="_blank" href="">
                <FaVimeoV size={32} />
              </a>
            </div>
            <div className="mx-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/soumalina-majumdar-5a1621155/"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
            <div className="mx-4">
              <a target="_blank" href="mailto:sourjit.paul61@gmail.com">
                <BiLogoGmail size={32} />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
