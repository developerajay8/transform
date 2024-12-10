import React from 'react'
import Navbar from '../components/Navbar/page'
import Footer from '../components/footer/page'
import { FaArrowRightLong } from "react-icons/fa6";
import about from "../../../public/about.png";
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Navbar/>

      <section className="bg-white py-12 " id='Premium'>
        <div className="font-handel max-w-[1204px] mx-auto px-[18px] xl:px-[0px] md:text-[40px] sm:text-[37px] text-[33px] pb-[14px] leading-[50px] font-semibold text-[rgb(255,80,45)]">
          PREMIUM PACKAGE - ONE-ON-ONE TRANSFORMATION
        </div>
        <div className="max-w-[1204px] mx-auto gap-5 px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1 my-auto">
            <h3 className="font-handel sm:text-[30px] text-[26px] font-semibold text-black">
              BASIC PACKAGE - PERSONAL GROWTH FOUNDATION
            </h3>
            <div className="flex items-center gap-6 pt-[20px] ">
              <FaArrowRightLong className="text-black text-4xl " />
              <span className="text-[rgb(255,80,45)] uppercase font-bold text-[22px] ">
                Basic Package: Build a Strong Foundation
              </span>
            </div>
            <p className="text-black font-poppins text-[20px] py-[20px] font-semibold">
              The Basic Package is designed to provide you with foundational
              support to enhance your personal growth.
            </p>

            <p className="text-black font-poppins text-[20px]  font-semibold">
              Details:
            </p>

            <ul className="sm:pl-[30px] pl-[12px] py-[12px] text-black list-disc">
              <li className="text-black leading-relaxed  font-poppins ">
                One-to-One Meeting: Each visit is ₹50,000.
              </li>
              <li className="text-black leading-relaxed font-poppins  pt-[8px]">
                Additional Costs: Travel, meals, and accommodations are to be
                covered by the client.
              </li>
            </ul>

            <p className="text-black font-poppins text-[20px]  font-semibold">
              This package is perfect for those starting their journey and
              looking for structured support as they begin to transform.
            </p>
          </div>
          <div className="col-span-1">
            <div className="">
              <Image src={about} alt="" className="h-[540px]" />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
