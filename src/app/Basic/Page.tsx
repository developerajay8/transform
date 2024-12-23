import React from 'react'
import Navbar from '../components/Navbar/page'
import Footer2 from '../components/footer2/page'
import { FaArrowRightLong } from "react-icons/fa6";
import about from "../../../public/about 1.png";
import Image from 'next/image';


// import Basic from "../../../public/Basic.png";
// import Premium from "../../../public/premium.png";
// import Custimized from "../../../public/custimized.png";


export default function page() {
  return (
    <div>
      <Navbar/>
      <section className="bg-white py-12 ">
        <div className="max-w-[1204px] mx-auto gap-5 px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1 my-auto">
            <h3 className="font-handel text-[30px] font-semibold text-black">
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
            <div className="sm:pl-[30px] pl-[12px] py-[12px] text-black">
              <div>
                Monthly Consultations: 4 online sessions (45 minutes each) for
                consistent guidance.
              </div>
              <div>Duration: 3 months (totaling ₹45,000).</div>
              <div>Fee: ₹15,000 per month.</div>
            </div>
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
