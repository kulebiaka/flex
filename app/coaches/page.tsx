import PortraitsCollection from "@/components/portraitsCollection";
import React from "react";
import stretcher1 from "@/public/images/coaches-stretchers-1.jpg";
import stretcher2 from "@/public/images/coaches-stretchers-2.jpg";
import stretcher3 from "@/public/images/coaches-stretchers-3.jpg";
import stretcher4 from "@/public/images/coaches-stretchers-4.jpg";
import fitnessCoacher1 from "@/public/images/coaches-fitness-1.jpg";
import fitnessCoacher2 from "@/public/images/coaches-fitness-2.jpg";
import fitnessCoacher3 from "@/public/images/coaches-fitness-3.jpg";
import fitnessCoacher4 from "@/public/images/coaches-fitness-4.jpg";
import fitnessCoacher5 from "@/public/images/coaches-fitness-5.jpg";
import { PortraitType } from "@/components/portrait";
import PageTemplate from "@/components/PageTemplate";

const stretchers = [
  {
    img: stretcher1,
    position: "flex-flow specialist",
    fullname: "Emma Williams",
  },
  { img: stretcher2, position: "Dynamic FlexFlow", fullname: "alexa iva" },
  {
    img: stretcher3,
    position: "Stretch & Strength Fusion",
    fullname: "Marcus Brown",
  },
  { img: stretcher4, position: "YogaFlex Harmony", fullname: "Priya yun " },
];

const fitnessCoaches = [
  {
    img: fitnessCoacher1,
    position: "Strength and Conditioning",
    fullname: "Sarah Johnson",
  },
  { img: fitnessCoacher2, position: "FlexCore Power", fullname: "Mia Lex" },
  {
    img: fitnessCoacher3,
    position: "Cardio Blaze Circuit",
    fullname: "Maria johnson",
  },
  {
    img: fitnessCoacher4,
    position: "HIIT Fusion Ignite",
    fullname: "liam snow ",
  },
  {
    img: fitnessCoacher5,
    position: "Mindful Movement Flow",
    fullname: "Simon lewis",
  },
];

const Coaches = () => {
  return (
    <PageTemplate title="coaches">
      <CoachesSection title="stretching" coaches={stretchers} />
      <CoachesSection title="fitness" coaches={fitnessCoaches} />
    </PageTemplate>
  );
};

const CoachesSection = ({
  title,
  coaches,
}: {
  title: string;
  coaches: Array<PortraitType>;
}) => (
  <section className="bg-white mb-[24px] w-full">
    <div className="w-[960px] mx-auto pb-[31px] md:max-w-[581px] xs:max-w-[345px]">
      <h3 className="text-[48px] font-[700] mb-[40px] uppercase">{title}</h3>
      <PortraitsCollection portraits={coaches} />
    </div>
  </section>
);

export default Coaches;
