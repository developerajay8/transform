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

      <section className="bg-black py-12 " id='customized'>
        <div className="max-w-[1204px] mx-auto gap-5 px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1 my-auto">
            <h3 className="font-handel text-[30px] font-semibold text-white">
              CUSTOMIZED PACKAGE - COMPLETE PERSONALITY TRANSFORMATION
            </h3>
            <div className="flex items-center gap-6 pt-[20px] ">
              <FaArrowRightLong className="text-white text-4xl " />
              <span className="text-[rgb(255,80,45)] uppercase font-bold text-[22px] ">
                Customized Package: A Complete Transformation
              </span>
            </div>
            <p className="text-white font-poppins text-[20px] py-[20px] font-semibold">
              Our Customized Package is the ultimate option for individuals
              seeking a full personality transformation.
            </p>

            <p className="text-white font-poppins text-[20px]  font-semibold">
              Details:
            </p>

            <ul className="sm:pl-[30px] pl-[12px] py-[12px] text-white list-disc">
              <li className="text-white leading-relaxed  font-poppins ">
                Comprehensive Support: Combination of online sessions, in-person
                visits, and tailored strategies.
              </li>
              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                Pricing: Flexible options from ₹150,000 to ₹155,000, depending
                on individual needs.
              </li>
            </ul>

            <p className="text-white font-poppins text-[20px]  font-semibold">
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
