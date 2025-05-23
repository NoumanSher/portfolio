"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => {
            const isRichText = /<\/?[a-z][\s\S]*>/i.test(item.description);

           return (
            <VerticalTimelineElement
              key={index}
              icon={item.icon as any}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",

                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              {
                (
                  <>
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <h4 className="!mt-0 font-medium">MERN stack Developer</h4>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700 h-[10rem] dark:text-white/75 overflow-y-auto scrollbar-slim">
                      {item.description}
                    </p>
                  </>
                ) as any
              }
            </VerticalTimelineElement>
          )}) as any
        }
      </VerticalTimeline>
    </section>
  );
}
