import Image from "next/image";
import React from "react";
import FlexLogoBig from "@/components/logo424_114";
import about1 from "@/public/images/about-1.png";
import about2 from "@/public/images/about-2.png";
import about3 from "@/public/images/about-3.jpg";
import mobileAbout from "@/public/images/mobile-about-1.jpg"
import freshMeals from "@/public/icons/fresh-food-1.png";
import partnersGymshark from "@/public/icons/partners-gymshark.svg";
import partnersMuscletech from "@/public/icons/partners-muscletech.svg";
import partnersPrime from "@/public/icons/partners-prime.svg";
import PortraitsCollection from "@/components/portraitsCollection";
import t1 from "@/public/images/team1.jpg";
import t2 from "@/public/images/team2.jpg";
import t3 from "@/public/images/team3.jpg";
import t4 from "@/public/images/team4.jpg";
import t5 from "@/public/images/team5.jpg";
import t6 from "@/public/images/team6.jpg";


const portraits = [
  { img: t1, fullname: "Anna Morison", position: "Founder/CEO" },
  { img: t2, fullname: "Mike Morison", position: "co-founder" },
  {
    img: t3,
    fullname: "silvia harris",
    position: "head of stretching department",
  },
  { img: t4, fullname: "adam pears", position: "head of fitness department" },
  { img: t5, fullname: "finn laster", position: "cooperation manager" },
  { img: t6, fullname: "denis aspenn", position: "lawyer" },
];

const About = () => {
  return (
    <main className="bg-[#E7E7E7]">
      <section
        style={{
          backgroundImage: `url(images/person-looking-futuristic-mystical-other-worldly-sky-1.png`,
        }}
        className="bg-no-repeat bg-cover bg-center w-full h-[50vw] xs:hidden"
      >
        <div
          style={{ boxShadow: "inset black 0px -10px 100px" }}
          className="flex items-center pl-[30px] h-full w-full"
        >
          <div className="sm:hidden">
            <h2 className="text-white text-[25.588px]">
              STRETCHING AND FITNESS STUDIO
            </h2>
            <FlexLogoBig color="white" />
          </div>
        </div>
      </section >

      <section
        className="hidden xs:block ">
        <Image src={mobileAbout} alt="" />
      </section>

      <section className="h-[300px] bg-black text-white px-[calc((100%-968px)/2)] md:h-[220px] xs:px-[calc((100%-313px)/2)] xs:h-[120px]">
        <div className="w-[968px] mx-auto h-60 relative text-[64px] text-white md:w-[calc(100%-40px)] md:text-[48px] xs:w-[313px] xs:h-[120px] xs:text-[24px]">
          <h1 className="w-full font-extrabold font-['Open Sans'] uppercase">
            Bend
          </h1>
          <div className="w-full">
            <h1 className="w-[550px] mx-auto h-full font-extrabold font-['Open Sans'] uppercase md:w-[450px] xs:w-[200px]">
              Breathe
            </h1>
          </div>
          <h1 className="w-full text-end absolute font-extrabold font-['Open Sans'] uppercase xs:h-[32px]">
            Break Limits
          </h1>
        </div>
      </section>

      <section className="py-[80px] max-w-[1280px] mx-auto md:max-w-[90%] xs:py-5">
        <div className="flex flex-row-reverse justify-between mb-[110px] pr-3 xs:flex-wrap xs:mb-7">
          <div className="max-w-[50%] xs:max-w-full">
            <Image src={about1} alt="" />
            <h2 className="hidden xs:block relative bottom-[12%] left-[5%] text-white text-[18px]">FLEX PHILOSOPHY</h2>
          </div>
          <div className="w-[450px] mx-auto px-3">
            <h2 className="text-[36px] mb-[21px] sm:text-[18px] xs:hidden">FLEX PHILOSOPHY</h2>
            <p className="text-[20px] sm:text-[14px] xs:hidden ">
              We breathe life into the philosophy that flexibility is not just a
              physical attribute; it's a state of mind. We believe in the power
              of flexibility to transform not only the body but also the spirit.
              Our philosophy centers on the idea that embracing flexibility,
              both in body and mind, is the key to unlocking one's true
              potential.
            </p>
            <p className="hidden xs:block text-[14px] mt-[-20px]"> {/*Text only for Mobile*/}
              We breathe life into the philosophy that flexibility is not just a physical attribute; it's a state of mind. We believe in the power of flexibility to transform not only the body but also the spirit.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-[110px] pr-3 xs:flex-wrap xs:mb-7">
          <div className="max-w-[50%] xs:max-w-full">
            <Image src={about2} alt="" />
            <h2 className="hidden xs:block relative bottom-[12%] left-[5%] text-white text-[18px] ">OUR MISSION</h2>
          </div>
          <div className="w-[450px] mx-auto px-3">
            <h2 className="text-[36px] mb-[21px] sm:text-[18px] xs:hidden">OUR MISSION</h2>
            <p className="text-[20px] sm:text-[14px] xs:hidden">
              Is to inspire and guide individuals on their unique wellness
              journeys. We are dedicated to providing a diverse range of
              programs that seamlessly blend stretching and fitness, offering a
              holistic approach to health. Through personalized guidance and
              innovative classes, we aim to empower our community to discover
              the joy of movement, achieve their fitness goals, and lead a life
              filled with vitality.
            </p>
            <p className="hidden xs:block text-[14px] mt-[-20px]">
              Is to inspire and guide individuals on their unique wellness journeys. We are dedicated to providing a diverse range of programs that seamlessly blend stretching and fitness, offering a holistic approach to health.
              Through personalized guidance and innovative classes, we aim to empower our community to discover the joy of movement, achieve their fitness goals, and lead a life filled with vitality.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between mb-[110px] pr-3 xs:flex-wrap xs:mb-7">
          <div className="max-w-[50%] xs:max-w-full">
            <Image src={about3} alt="" />
            <h2 className="hidden xs:block relative bottom-[12%] left-[5%] text-white text-[18px]">FLEX DREAM</h2>
          </div>
          <div className="w-[450px] mx-auto px-3">
            <h2 className="text-[36px] mb-[21px] sm:text-[18px] xs:hidden">FLEX DREAM</h2>
            <p className="text-[20px] sm:text-[14px] xs:hidden">
              We dream of a world where everyone experiences the liberating
              power of flexibility. Our vision extends beyond the studio walls,
              envisioning a community that embraces a lifestyle of balance,
              strength, and resilience. We dream of individuals discovering
              their inherent capacity for growth, both physically and mentally,
              and carrying this newfound vitality into every facet of their
              lives.
            </p>
            <p className="hidden xs:block text-[14px] mt-[-20px]">
              We dream of a world where everyone experiences the liberating power of flexibility.
              We dream of individuals discovering their inherent capacity for growth, both physically and mentally, and carrying this newfound vitality into every facet of their lives.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(images/confident-young-woman-elegant-clothing-standing-indoors-generated-by-artificial-intelligence-1.jpg`,
        }}
        className="h-[45vw] bg-cover bg-no-repeat"
      ></section>

      <section className="pt-[70px] pb-[100px] xs:py-[30px]">
        <div className="w-[960px] mx-auto md:max-w-[581px] xs:max-w-[345px] ">
          <h3 className="text-[64px] font-[800] max-w-[960px] mx-auto mb-[40px] uppercase sm:text-[24px]">FLEX TEAM</h3>
          <PortraitsCollection portraits={portraits} />
        </div>
      </section>

      <section className="bg-black px-[calc((100%-960px)_/_2)] h-[266px] text-[40px] font-[600] text-white md:px-0 xs:h-[96px] xs:px-6 xs:mb-8">
        <h3 className="text-center pt-11 mb-[30px] xs:mb-3 xs:pt-4 xs:text-[14px]">PARTNERS</h3>
        <div className="flex justify-between items-center md:justify-around">
          <div className="max-w-[25%]">
            <Image className="xs:max-h-[18px]" src={partnersGymshark} alt="Gymshark" />
          </div>

          <div className="max-w-[25%]">
            <Image className="xs:max-h-[18px]" src={partnersPrime} alt="Prime" />
          </div>

          <div className="max-w-[25%]">
            <Image className="xs:max-h-[18px]" src={partnersMuscletech} alt="Muscletech" />
          </div>

          <div className="max-w-[25%]">
            <Image className="xs:max-h-[18px]" src={freshMeals} alt="Fresh Fit Meals" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
