"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Benifits from "../../../../public/WhatsApp Image 2025-02-01 at 13.58.29_8d61ae7a 1.png";



export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav>
        <nav className="bg-black w-full ">
          <div className="container mx-auto max-w-[1340px] flex items-center justify-between px-4 py-3 md:py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-white font-poppins">
              <Link href="/">
                <Image
                  src={Benifits}
                  alt="Logo"
                  width={120}
                  height={50}
                  
                />
              </Link>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex text-[20px] font-handel space-x-6">
              <Link href="/" className="text-white hover:text-orange-600">
                Home
              </Link>
              <Link
                href="/aboutus"
                className="text-white hover:text-orange-600 "
              >
                About Sakshi
              </Link>
              <Link
                href="/achivement"
                className="text-white hover:text-orange-600"
              >
                Achievements
              </Link>
              <Link
                href="/packges"
                className="text-white hover:text-orange-600"
              >
                Packages
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[20px] font-semibold text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-5xl font-semibold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white text-[20px] font-handel border-t">
              <div className="space-y-2 px-4 py-3">
                <Link
                  href="/"
                  className="block text-black hover:text-orange-600"
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className="block text-black hover:text-orange-600"
                >
                  About Sakshi
                </Link>
                <Link
                  href="/achivement"
                  className="block text-black hover:text-orange-600"
                >
                  Achievements
                </Link>
                <Link
                  href="/packges"
                  className="block text-black hover:text-orange-600"
                >
                  Packages
                </Link>
              </div>
            </div>
          )}
        </nav>
      </nav>
    </div>
  );
}



