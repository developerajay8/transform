import React from 'react'
import Image from "next/image";
import Logo from "../../../public/F78FB7D5-D2E8-41EB-9A28-99BCE327BA3E-28314-000019438A04710F 1 (3).png";
import about from "../../../public/about.png";
import Navbar from '../components/Navbar/page'
import Footer2 from '../components/footer2/page'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="bg-gray-100 " >
        <Navbar />
      </div>

      <div className="w-full mx-auto bg-black">
        <Image
          src={Logo}
          alt="Home Banner"
          className="w-[100%] sm:h-[100vh] h-[70vh]"
        />
      </div>

      <section className="bg-white py-12 ">
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px]">
          <div className="">
            <h3 className="text-[38px] text-[black] font-semibold font-handel leading-[50px] ">
              OVERVIEW OF CONSULTATION PACKAGES
            </h3>
            <div className="text-[rgb(255,80,45)] pl-[16px] pt-[20px] uppercase font-bold text-[22px] ">
              CHOOSE THE RIGHT PACKAGE FOR YOUR JOURNEY
            </div>

            <ul className="text-left sm:pl-[60px] pl-[24px] list-disc ">
              <li className="text-black leading-relaxed  font-poppins ">
                Whether you’re looking to improve self-confidence, strengthen
                relationships, or embark on a complete{" "}
                <br className="md:block hidden" /> transformation, we have a
                package suited for your goals.
              </li>
              <li className="text-black leading-relaxed font-poppins pt-[8px] ">
                Our packages are tailored to offer varying levels of support and
                personalization to meet different needs and{" "}
                <br className="md:block hidden" /> budgets.
              </li>
            </ul>

            <div className="pt-[20px]">
              <span className="text-[rgb(255,80,45)] pl-[16px] pt-[20px]  font-bold text-[18px] ">
                Packages
              </span>
              <ul className="text-left sm:pl-[60px] pl-[24px] list-disc ">
                <li className="text-black leading-relaxed  font-poppins ">
                  <Link href={"#basic"} className="font-bold ">
                    Basic Package:
                  </Link>{" "}
                  Ideal for those seeking foundational support through regular
                  guidance.
                </li>
                <li className="text-black leading-relaxed font-poppins pt-[8px] ">
                  <Link href={"#Premium"} className="font-bold">
                    Premium Package:
                  </Link>{" "}
                  For individuals looking for in-depth, in-person consultations.
                </li>
                <li className="text-black leading-relaxed font-poppins pt-[8px] ">
                  <Link href={"#customized"} className="font-bold">
                    Customized Package:
                  </Link>{" "}
                  A comprehensive transformation experience with extensive
                  support.
                </li>
              </ul>
            </div>
            <div className="pt-[20px]">
              <Image src={Logo} alt="" className="h-[250px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 " id='basic'>
        <div className="max-w-[1204px] mx-auto gap-5 px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1 my-auto">
            <h3 className="font-handel text-[30px] font-semibold text-white">
              BASIC PACKAGE - PERSONAL GROWTH FOUNDATION
            </h3>
            <div className="flex items-center gap-6 pt-[20px] ">
              <FaArrowRightLong className="text-white text-4xl " />
              <span className="text-[rgb(255,80,45)] uppercase font-bold text-[22px] ">
                Basic Package: Build a Strong Foundation
              </span>
            </div>
            <p className="text-white font-poppins text-[20px] py-[20px] font-semibold">
              The Basic Package is designed to provide you with foundational
              support to enhance your personal growth.
            </p>

            <p className="text-white font-poppins text-[20px]  font-semibold">
              Details:
            </p>
            <div className="sm:pl-[30px] pl-[12px] py-[12px] text-white">
              <div>
                Monthly Consultations: 4 online sessions (45 minutes each) for
                consistent guidance.
              </div>
              <div>Duration: 3 months (totaling ₹45,000).</div>
              <div>Fee: ₹15,000 per month.</div>
            </div>
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
              "Our Customized Package is the ultimate option for individuals
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


      <section className="bg-white py-12 ">
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px] grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="">
              <h2 className="font-bold font-handel text-[black] sm:text-[40px] text-[34px]">
              TAKE THE FIRST STEP
              </h2>
              <p className="text-black font-poppins sm:text-[18px] text-[16px] pt-[10px]">Are you ready to transform your personality and unlock your potential? Contact us today to learn more about our packages and begin your journey. </p>

              <p className="text-black font-poppins sm:text-[18px] text-[16px] pt-[30px]">Contact Information: </p>
                <ul className="sm:text-[16px] text-[14px] font-poppins text-[black] list-disc pt-[20px] pl-[30px]">
                  <li>Email: <Link href={''} className="hover:text-[rgb(255,80,45)]">transformwithsakshi@gmail.com</Link></li>
                  <li>Phone: <Link href={''} className="hover:text-[rgb(255,80,45)]">+916377927068</Link></li>
                  <li>Social Media: <Link href={''} className="underline hover:text-[rgb(255,80,45)] ">Instagram Handles</Link></li>
                </ul>

                <p className="text-black font-poppins sm:text-[18px] text-[16px] pt-[30px]">Are you ready to transform your personality and unlock your potential? Contact us today to learn more about our packages and begin your journey. </p>

            </div>
          </div>
          <div className="col-span-1 md:pt-[0px] pt-[30px]">
            <div className="">
            <Image
          src={about}
          alt=""
          className="h-[500px]"
        />
            </div>
          </div>
        </div>
      </section>


      <div className="bg-black">
        <Footer2/>
      </div>
    </div>
  )
}
