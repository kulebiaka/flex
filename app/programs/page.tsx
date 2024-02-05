import PortraitsCollection from "@/components/portraitsCollection";
import React from "react";
import stretcher1 from "@/public/images/coaches-stretchers-1.jpg";
import stretcher2 from "@/public/images/coaches-stretchers-2.jpg";
import stretcher3 from "@/public/images/coaches-stretchers-3.jpg";
import stretcher4 from "@/public/images/coaches-stretchers-1.jpg";
import Program from "@/components/program";
import PageTemplate from "@/components/PageTemplate";

export const programs = [
  {
    title: "senior flex vitality",
    img: "url(images/programs-1.jpg)",
    focusAreas: "Flexiility, Balance, Joint Health",
    sessions: 2,
  },
  {
    title: "flex fusion",
    img: "url(images/programs-2.jpg)",
    focusAreas: "Flexibility, Cardio, Strength",
    sessions: 3,
  },
  {
    title: "Stretch & Sculpt",
    img: "url(images/programs-3.jpg)",
    focusAreas: "Flexibility, Strength, Endurance",
    sessions: 4,
  },
  {
    title: "Strength & Stretch",
    img: "url(images/programs-4.jpg)",
    focusAreas: "Flexibility, Strength, Circuit Training",
    sessions: 3,
  },
  {
    title: "Mindful Movement",
    img: "url(images/programs-5.jpg)",
    focusAreas: "Flexibility, Relaxation, Mindfulness",
    sessions: 2,
  },
  {
    title: "Cardio Flex Express",
    img: "url(images/programs-6.jpg)",
    focusAreas: "Flexibility, Cardio, Energy",
    sessions: 5,
  },
];

const Programs = () => {
  return (
    <PageTemplate title="programs" bgColor="white">
      <div className="mx-auto flex w-[983px] flex-wrap gap-[50px_20px] pb-36 md:w-[680px] md:justify-between md:gap-[0_0] xs:w-[342px] xs:pb-12">
        {programs.map(({ title, img, sessions, focusAreas }) => (
          <Program
            key={title}
            title={title}
            img={img}
            sessions={sessions}
            focusAreas={focusAreas}
          />
        ))}
      </div>
    </PageTemplate>
  );
};

export default Programs;
