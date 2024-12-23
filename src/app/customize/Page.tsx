import React from 'react'
import Navbar from '../components/Navbar/page'
import Footer2 from '../components/footer2/page'
import { FaArrowRightLong } from "react-icons/fa6";
import about from "../../../public/about 1.png";
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <Navbar/>

      <section className="bg-white py-12 " id='customized'>
        <div className="max-w-[1204px] mx-auto gap-5 px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1 my-auto">
            <h3 className="font-handel text-[30px] font-semibold text-black">
              CUSTOMIZED PACKAGE - COMPLETE PERSONALITY TRANSFORMATION
            </h3>
            <div className="flex items-center gap-6 pt-[20px] ">
              <FaArrowRightLong className="text-black text-4xl " />
              <span className="text-[rgb(255,80,45)] uppercase font-bold text-[22px] ">
                Customized Package: A Complete Transformation
              </span>
            </div>
            <p className="text-black font-poppins text-[20px] py-[20px] font-semibold">
              Our Customized Package is the ultimate option for individuals
              seeking a full personality transformation.
            </p>

            <p className="text-black font-poppins text-[20px]  font-semibold">
              Details:
            </p>

            <ul className="sm:pl-[30px] pl-[12px] py-[12px] text-black list-disc">
              <li className="text-black leading-relaxed  font-poppins ">
                Comprehensive Support: Combination of online sessions, in-person
                visits, and tailored strategies.
              </li>
              <li className="text-black leading-relaxed font-poppins  pt-[8px]">
                Pricing: Flexible optioblackns from ₹150,000 to ₹155,000, depending
                on individual needs.
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

      <Footer2/>
    </div>
  )
}
