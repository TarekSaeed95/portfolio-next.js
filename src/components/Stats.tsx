"use client";
import CountUp from "react-countup";
const stats = [
  { num: 2, text: "Years of experience" },
  { num: 19, text: "Projects completed" },
  { num: 10, text: "Technologies mastered" },
  { num: 999, text: "Code commits" },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:py-0 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto xl:max-w-none max-w-[80vw]">
          {stats.map((stat, i) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={i}
              >
                <div className="flex items-center gap-1">
                <p className="text-3xl xl:text-5xl">+</p>
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                </div>
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
