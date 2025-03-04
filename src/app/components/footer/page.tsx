import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <footer className="bg-white py-8 text-black">
        <div className="container mx-auto max-w-[1204px] px-[18px] xl:px-[0px] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="md:text-[32px]  sm:text-[28px] text-[26px] leading-[42px] font-handel uppercase font-bold mb-4 text-[black]">
              About Sakshi Bhogal
            </h2>
            <p className="lg:text-[18px] text-[16px] font-poppins text-left text-black">
              Sakshi Bhogal is an expert in personality transformation with over
              a decade of experience. She helps individuals unlock their true
              potential through relationship consulting and psychological
              insights.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-[rgb(255,80,45)]">
              Quick Links
            </h2>
            <ul className="space-y-2 font-poppins font-bold">
              <li>
                <Link href={"/"} className="hover:text-[rgb(255,80,45)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/aboutus"} className="hover:text-[rgb(255,80,45)]">
                  About Sakshi
                </Link>
              </li>
              <li>
                <Link
                  href={"/achivement"}
                  className="hover:text-[rgb(255,80,45)]"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link href={"/packges"} className="hover:text-[rgb(255,80,45)]">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-[rgb(255,80,45)]">
              Contact Information
            </h2>
            <ul className="space-y-2 font-bold font-poppins">
              <li>
                Email:{" "}
                <a
                  href="mailto:sakshi@example.com"
                  className=" hover:text-[rgb(255,80,45)] text-[14px]"
                >
                  transformwithsakshi@gmail.com
                </a>
              </li>
              {/* <li>
                Mobile:{" "}
                <a
                  href="tel:+8209056518"
                  className=" hover:text-[rgb(255,80,45)] text-[14px]"
                >
                  +918209056518
                </a>
              </li> */}
              <li className="cursor-pointer">
                
                <a
                  href="https://forms.gle/sBR2zLyoTXa4YTNV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline text-[rgb(255,80,45)] hover:text-[rgb(255,80,45)]"
                >
                  Book your session now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-black font-bold">
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://wa.me/8209056518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-green-400 text-2xl"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          © {new Date().getFullYear()} Sakshi Bhogal. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
