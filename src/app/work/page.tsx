"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Pharmacy marts",
    description:
      "Pharmacymarts is an marketplace for medical suppliers to list their products and offerings in single location where pharmacists can get the best offers for their daily supplies' request",
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "Reactjs",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Redux",
      },
      {
        name: "React Query",
      },
    ],
    image: "/assets/work/pharmacymarts.jpg",
    github: "",
    live: "https://www.pharmacymarts.com/",
  },
  {
    num: "02",
    category: "Delivery app (pharmacy marts)",
    description: `1- Manages various aspects of our delivery process, including userrole
                    assignment, invoice handling, and returns collection.
                  2- Enhance operational efficiency by addressing the bulk action limitations.
                  3- Reduce operational and resource costs associated with other solutions.`,
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "Reactjs",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Zustand",
      },
      {
        name: "React Query",
      },
    ],
    image: "/assets/work/deliveryApp.jpg",
    github: "",
    live: "https://supplychain.pharmacymarts.com/",
  },
  {
    num: "03",
    category: "Admin dashboard (pharmacy marts)",
    description: ``,
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Reactjs",
      },
      {
        name: "SCSS",
      },
      {
        name: "React Query",
      },
    ],
    image: "/assets/work/admin-dashboard.jpg",
    github: "",
    live: "https://admin.pharmacymarts.com/",
  },
  {
    num: "04",
    category: "AFDV Marketing",
    description: `Logo Creation, Brand Strategy, Brand Naming, Websites, Mobile Applications, SEO, Social Media Marketing, Graphic Design, Email Marketing, and Custom Software Development.`,
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/assets/work/afdv.jpg",
    github: "https://github.com/TarekSaeed95/marketing",
    live: "https://afdv-marketing.vercel.app/",
  },
  {
    num: "05",
    category: "ARTE BLVD",
    description: `Art Shop, I developed the
front end of their eCommerce platform using Nextjs & TypeScript. I was
responsible for building the UI and integrating it with the backend endpoints.`,
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/assets/work/ARTE.BLVD.jpg",
    github: "",
    live: null,
  },
  {
    num: "06",
    category: "Codemy",
    description: `Coding Courses Provider, I Worked on the prototype of the
website using React, TypeScript, RTK, Firebase & Tailwind CSS. I was
responsible for building the UI and contributed to the UI/UX design.`,
    stack: [
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Firebase",
      },
    ],
    image: "/assets/work/codemy.jpg",
    github: "https://github.com/TarekSaeed95/Codemy",
    live: null,
  },
  {
    num: "07",
    category: "House-Marketplace",
    description: `House marketplace is an e-commerce website made with React and Firebase.
The website has Authentication Features (sign in, sign up, Google authentication, forgot password, logout, edit user data).
Users only can Manage Ads (create Ads, update Ads, delete Ads).
Explore Page has a section for Recommended Ads which holds 5 Ads with discount,
Categories (Rent or Sale), offers Section includes ads with discount only,
Visitors can contact landlords via email.
`,
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Reactjs",
      },
      {
        name: "TailwindCSS & DaisyUI",
      },
      {
        name: "Firebase",
      },
    ],
    image: "/assets/work/house-market.jpeg",
    github: "https://github.com/TarekSaeed95/House-Marketplace",
    live: "https://house-marketplace-delta.vercel.app/",
  },
  {
    num: "08",
    category: "GitHub Finder",
    description: `GitHub Finder Simple Application helps you to search for GitHub users Info like his name, location, website, number of follwers and so on and his repos information.
`,
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Reactjs",
      },
      {
        name: "TailwindCSS & DaisyUI",
      },
      {
        name: "Axios",
      },
    ],
    image: "/assets/work/github-finder.jpg",
    github: "https://github.com/TarekSaeed95/Github-finder",
    live: "https://github-finder-three-khaki.vercel.app/",
  },
  {
    num: "09",
    category: "Porty",
    description: `Website with many sections,enhanced styles and beautiful Animations made with HTML and New CSS technologies only.
`,
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/template-portfolio.jpg",
    github: "https://github.com/TarekSaeed95/Portfolio",
    live: "https://portfolio-silk-theta-75.vercel.app/",
  },
  {
    num: "10",
    category: "Speco",
    description: `Website with setting box to save user-preferences, multi background images, bullets to change section.
`,
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/speco.jpg",
    github: "https://github.com/TarekSaeed95/Speco-template",
    live: "https://speco-tareksaeed95.vercel.app/",
  },
];
const Work = () => {
  const [project, SetProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    SetProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <div className="text-white/60">
                {project.description.split(".").map((desc, index) => {
                  return (
                    <p key={index}>
                      {desc}
                      {index !== project.description.split(".").length - 1 &&
                        "."}
                    </p>
                  );
                })}
              </div>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl  text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 pb-8">
                <Link href={project.live ? project.live : ""}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {project.live ? "Live project" : "Not Deployed Yet"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github !== "private" ? project.github : ""}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.github ? "Github Repo" : "Private Repo"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black "></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify:none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
