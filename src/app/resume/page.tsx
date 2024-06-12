"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
const about = {
  title: "About me",
  descrition:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil autem eum possimus quia, vero officia perferendis tempore quae voluptas deserunt. Maiores dolores ipsa unde fuga sequi accusamus fugit earum aliquam?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tarek Fakhr-eldeen",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Egyptian",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "+201117405320",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "linkedin.com/in/tarek-saeeed/",
    },
    {
      fieldName: "Email",
      fieldValue: "tare2fakhr@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};
// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil autem eum possimus quia, vero officia perferendis tempore quae voluptas deserunt. Maiores dolores ipsa unde fuga sequi accusamus fugit earum aliquam?",
  items: [
    {
      company: "Pharmacy Marts",
      position: "Frontend developer",
      duration: "Aug 2023 - Present",
    },
    {
      company: "AFDV Marketing - MaglaTech",
      position: "Frontend developer",
      duration: "Jan 2023 - Jul 2023",
    },
    {
      company: "Freelance",
      position: "Frontend developer",
      duration: "May 2022",
    },
  ],
};
//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil autem eum possimus quia, vero officia perferendis tempore quae voluptas deserunt. Maiores dolores ipsa unde fuga sequi accusamus fugit earum aliquam?",
  items: [
    {
      institution: "Al-Azhar university",
      field: "Engineering",
      year: "2013 - 2018",
    },
    {
      institution: "ITI Cairo",
      field: "Full Stack Web Development Using .NET",
      year: "2023",
    },
  ],
};
//skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil autem eum possimus quia, vero officia perferendis tempore quae voluptas deserunt. Maiores dolores ipsa unde fuga sequi accusamus fugit earum aliquam?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXT.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
};

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              eductation
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
