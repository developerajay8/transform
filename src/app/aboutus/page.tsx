import React from "react";
import Image from "next/image";
import Logo from "../../../public/F78FB7D5-D2E8-41EB-9A28-99BCE327BA3E-28314-000019438A04710F 1 (3).png";
import about from "../../../public/about 1.png";
// import Takethe from "../../../public/Takethe.png";
import Navbar from "../components/Navbar/page";
import Footer from "../components/footer/page";
import Whyneed from "../../../public/danie-franco-7KHCNCddn2U-unsplash 1.png";
import Whyneed2 from "../../../public/nik-shuliahin-BuNWp1bL0nc-unsplash 1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="bg-gray-100 ">
        <Navbar />
      </div>

      <div className="w-full mx-auto bg-black">
        <Image
          src={Logo}
          alt="Home Banner"
          className="w-[100%] sm:h-[100vh] h-[70vh]"
        />
      </div>

      <section className="py-12 bg-black">
        <div className="mx-auto max-w-[1204px] px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Left Side: Content */}
          <div className="col-span-1 text-center md:text-left space-y-4 my-auto">
            <h1 className=" sm:text-[62px] text-[56px] leading-[72px] font-handel uppercase font-bold text-white">
              About sakshi <br className="sm:block hidden" /> bhogal
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-8 pt-[20px]">
              <span className="text-white uppercase font-bold text-[22px]">
                About me
              </span>
              <FaArrowRightLong className="text-[rgb(255,80,45)] text-4xl" />
            </div>

            <ul className="text-left list-disc pl-[20px] space-y-4">
              <li className="text-white leading-relaxed font-poppins pr-[20px] md:pr-[50px]">
                Sakshi Bhogal is a recognized expert in personality
                transformation, with over a decade of experience. Specializing
                in relationship consulting, she leverages her deep understanding
                of human psychology to help individuals unlock their true
                potential.
              </li>
              <li className="text-white leading-relaxed font-poppins pr-[20px] md:pr-[50px]">
                Sakshi has successfully guided numerous clients in navigating
                complex relationships, overcoming personal challenges, and
                achieving their goals with confidence and self-awareness.
              </li>
              <li className="text-white leading-relaxed font-poppins pr-[20px] md:pr-[50px]">
                Her approach combines psychological insights with actionable
                steps, making her a trusted guide for personal and professional
                growth.
              </li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="col-span-1 flex sm:justify-center">
            <Image
              src={about} // Replace with your image path
              alt="About Us"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-black overflow-hidden">
        <div className="max-w-[1204px] px-[18px] xl:px-[0px] gap-5 mx-auto text-white grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="">
              <h2 className="uppercase text-[50px] leading-[56px] font-handel">
                WHY YOU MAY NEED CONSULTING{" "}
              </h2>
              <span className="text-[20px] font-poppins mt-[30px] font-semibold">
                IS IT TIME FOR A CHANGE?
              </span>
            </div>
            <div className="sm:flex gap-5 pt-5">
              <Image
                src={Whyneed}
                alt="Home Banner"
                className="lg:max-w-[275px]  h-[400px]"
              />
              <Image
                src={Whyneed2}
                alt="Home Banner"
                className="lg:max-w-[275px] h-[400px] sm:pt-0 pt-[15px] "
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-8 pt-[20px] ">
              <FaArrowRightLong className="text-[rgb(255,80,45)] text-4xl sm:block hidden" />
              <span className="text-white uppercase font-bold text-[22px] ">
                CHOOSE THE RIGHT PACKAGE FOR <br className="sm:bolck hidden" />
                YOUR JOURNEY
              </span>
            </div>
            <p className="text-white font-poppins py-[20px] sm:pl-[70px] ">
              Are you feeling stuck in your personal or professional life? Do
              you struggle with confidence, self-doubt, or managing
              relationships? Here are some signs it may be time to consider
              consulting:
            </p>

            <ul className="text-left sm:pl-[90px] pl-[24px] list-disc ">
              <li className="text-white leading-relaxed  font-poppins ">
                Feeling Unfulfilled: Experiencing a lack of motivation or
                direction
              </li>
              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                Struggling with Relationships: Challenges in maintaining
                meaningful connections.
              </li>
              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                Self-Doubt: Struggling with low self-esteem or fear of taking
                risks.
              </li>

              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                Uncertain Career Path: Lack of clarity on career goals and next
                steps.
              </li>

              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                Overwhelmed by Stress: Difficulty managing stress or achieving
                work-life balance.
              </li>

              <li className="text-white leading-relaxed font-poppins  pt-[8px]">
                If you resonate with any of these, consulting can provide the
                clarity and tools to overcome these obstacles. Sakshi’s guidance
                will help you unlock your potential and find lasting
                fulfillment.
              </li>
            </ul>
           
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px]">
          <div className="">
            <h1 className="uppercase font-bold md:text-[44px] sm:text-[40px] text-[30px] text-[black] font-handel sm:leading-[55px] leading-[40px]">
              BEGIN YOUR TRANSFORMATION JOURNEY WITH SAKSHI BHOGAL
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="md:col-span-5 col-span-12
             my-auto">
              <ul className="list-disc sm:text-[18px] text-[16px] font-poppins sm:pl-[60px] pl-[40px] pt-[18px]">
                <li>
                  Welcome to Transform with Sakshi, where your personal and
                  professional growth journey begins. Our mission is to help you
                  unlock your true potential, guided by a tailored approach
                  rooted in psychology and relationship consulting
                </li>
                <li className="pt-[10px]">
                  With Sakshi’s proven methods, you’ll gain the clarity,
                  confidence, and skills needed to overcome personal challenges
                  and achieve your life goals.
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="">
                <Image
                  src={Logo}
                  alt="Home Banner"
                  className="sm:h-[530px] sm:w-[] max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 ">
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px] grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="">
              <h2 className="font-bold font-handel text-[white] sm:text-[40px] text-[34px]">
              TAKE THE FIRST STEP
              </h2>
              <p className="text-white font-poppins sm:text-[18px] text-[16px] pt-[10px]">Are you ready to transform your personality and unlock your potential? Contact us today to learn more about our packages and begin your journey. </p>

              <p className="text-white font-poppins sm:text-[18px] text-[16px] pt-[30px]">Contact Information: </p>
                <ul className="sm:text-[16px] text-[14px] font-poppins text-[white] list-disc pt-[20px] pl-[30px]">
                  <li>Email: <Link href={''} className="hover:text-[rgb(255,80,45)]">transformwithsakshi@gmail.com</Link></li>
                  <li>Phone: <Link href={''} className="hover:text-[rgb(255,80,45)]">+916377927068</Link></li>
                  <li>Social Media: <Link href={''} className="underline hover:text-[rgb(255,80,45)] ">Instagram Handles</Link></li>
                </ul>

                <p className="text-white font-poppins sm:text-[18px] text-[16px] pt-[30px]">Are you ready to transform your personality and unlock your potential? Contact us today to learn more about our packages and begin your journey. </p>

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

      <div>
        <Footer/>
      </div>
    </div>
  );
}
