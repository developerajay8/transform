import React from "react";
import Image from "next/image";
import about from "../../../public/about 1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../components/Navbar/page";
import Footer2 from '../components/footer2/page';
import Whyneed from "../../../public/danie-franco-7KHCNCddn2U-unsplash 1.png";
import Whyneed2 from "../../../public/nik-shuliahin-BuNWp1bL0nc-unsplash 1.png";
import Logo from "../../../public/F78FB7D5-D2E8-41EB-9A28-99BCE327BA3E-28314-000019438A04710F 1 (3).png";

export default function Page() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="w-full mx-auto bg-black">
        <Image
          src={Logo}
          alt="Home Banner"
          className="w-[100%] sm:h-[100vh] h-[70vh]"
        />
      </div>

      <section className="py-12 bg-black overflow-hidden">
        <div className="max-w-[1204px] px-[18px] xl:px-[0px] gap-5 mx-auto text-white grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="">
              <h2 className="uppercase md:text-[50px] sm:text-[40px] text-[34px] md:leading-[56px] sm:leading-[50px] leading-[40px] pb-[10px] font-handel">
                WHY YOU MAY NEED CONSULTING{" "}
              </h2>
              <span className="sm:text-[20px] text-[18px] font-poppins mt-[30px] font-semibold">
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

      <section className="bg-gray-50 py-12 ">
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px]">
          <h2 className="text-[34px] font-handel font-bold text-[rgb(255,80,45)] uppercase">
            News & Awards
          </h2>
        </div>
        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px] grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="col-span-1 my-auto">
            <p className="text-black font-poppins font-bold sm:text-[20px] text-[18px]  ">
              Sakshi Bhogal received the award for India’s Best Personality
              Transformation Coach for Men
            </p>

            <p className="text-black font-poppins text-[16px] sm:pt-[20px] pt-[8px] ">
              Sakshi Bhogal” is a renowned Indian Actress, Entrepreneur and
              celebrity influencer. She was the Jury member of Miss & Mrs. India
              and the Jaipur Brand Ambassador of Weaa India. She has worked with
              various celebrities in Bollywood industry and has incredible
              google presence. She is now popular on social media platforms in
              podcast with renowned actors, social influencers.
            </p>
          </div>

          <div className="col-span-1">
            <Image src={about} alt="" className="h-[400px]" />
          </div>
        </div>

        <div className="max-w-[1204px] mx-auto px-[18px] xl:px-[0px]">
          <p className="text-black font-poppins text-[16px] sm:pt-[20px] pt-[8px] ">
            Her work in personality development and grooming mastery has caught
            the attention of major outlets like The Press Wire. Sakshi’s
            articles and features are regularly published, establishing her as
            an influential figure shaping the wellness and grooming space. Her
            empowering advice continues to inspire individuals and brands alike,
            making a lasting impact in the world of self-improvement.
          </p>
        </div>
      </section>

      <div>
        <Footer2/>
      </div>
    </div>
  );
}
