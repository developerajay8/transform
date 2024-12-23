import React from "react";
import Image from "next/image";
import Logo from "../../../public/F78FB7D5-D2E8-41EB-9A28-99BCE327BA3E-28314-000019438A04710F 1 (3).png";
import Whyneed from "../../../public/danie-franco-7KHCNCddn2U-unsplash 1.png";
import Whyneed2 from "../../../public/nik-shuliahin-BuNWp1bL0nc-unsplash 1.png";
import about from "../../../public/about 1.png";
import Benifits from "../../../public/Benifits.png";
import Benifits2 from "../../../public/Benifits2.png";
import Benifits3 from "../../../public/Benifits3.png";
import Benifits4 from "../../../public/Benifits4.png";
import Whychoose from "../../../public/IMG_0047.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <div className="w-full mx-auto bg-black">
        <Image
          src={Logo}
          alt="Home Banner"
          className="w-[100%] sm:h-[100vh] h-[70vh]"
        />
      </div>
      

     

      <section className="py-12 bg-black">
        <div className="mx-auto max-w-[1204px] px-[18px] xl:px-[0px] grid lg:grid-cols-2 grid-cols-1 gap-6">
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

          <div className="col-span-1 flex sm:justify-center">
            <Image
              src={about}
              alt="About Us"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white ">
        <div className="px-[18px] xl:px-[0px]  mx-auto gap-6 max-w-[1204px] flex flex-col-reverse md:flex-row items-center">
          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={Whychoose} // Replace with your image path
              alt="About Us"
              className=""
            />
          </div>

          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-[36px] leading-[46px] font-handel uppercase font-bold text-[rgb(255,80,45)]">
              why choose transform with sakshi ?
            </h1>
            <hr className="border-2 text-[rgb(255,80,45)]" />
            <div className="flex items-center gap-8 pt-[20px] pl-[20px]">
              <FaArrowRightLong className="text-black text-4xl" />
              <span className="text-black uppercase font-bold text-[22px] ">
                THE SAKSHI BHOGAL DIFFERENCE
              </span>
            </div>

            <ul className="text-left pl-[40px] list-disc">
              <li className="text-black leading-relaxed  font-poppins ">
                Sakshi’s approach goes beyond traditional coaching; she focuses
                on holistic transformation that addresses both inner and outer
                growth.
              </li>
              <li className="text-black leading-relaxed font-poppins  pt-[10px]">
                Her unique methods help clients achieve mindset shifts, build
                lasting confidence, and develop resilience
              </li>
              <li className="text-black leading-relaxed font-poppins  pt-[10px]">
                By blending relationship consulting with a deep understanding of
                human behavior, Sakshi provides clients with tailored strategies
                that lead to impactful, lasting changes
              </li>
            </ul>
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

      <section className="py-12 bg-black">
        <div className="max-w-[1204px] mx-auto px-[18px] xl-[0px]">
          <div className="">
            <h2 className="uppercase sm:text-[50px] text-[44px] leading-[56px] font-handel text-[rgb(255,80,45)]">
              BENEFITS OF CONSULTING WITH SAKSHI{" "}
            </h2>
            <div className="flex items-center gap-8 pt-[15px] ">
              <span className="text-white uppercase font-bold text-[22px] ">
                CHOOSE THE RIGHT PACKAGE FOR <br className="sm:bolck hidden" />
                YOUR JOURNEY
              </span>
            </div>
            <div className="flex items-center gap-5 pt-[20px] sm:pl-[20px] ">
              <FaArrowRightLong className="text-[white] text-4xl sm:block hidden" />
              <p className="text-white font-poppins ">
                When you choose to work with Sakshi, you’re investing in a{" "}
                <br />
                transformation experience unlike any other. Here’s why <br />{" "}
                Sakshi’s consulting stands out.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-5 pt-[18px]">
            <div className="col-span-1">
              <Image src={Benifits} alt="" className="" />
            </div>
            <div className="col-span-1">
              <Image src={Benifits2} alt="" className="" />
            </div>
            <div className="col-span-1">
              <Image src={Benifits3} alt="" className="" />
            </div>
            <div className="col-span-1">
              <Image src={Benifits4} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
