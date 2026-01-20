import React from "react";
import { data } from "../data";
import aboutImage from "../Img/s1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900"
    >
      <h2 className="text-4xl text-center dark:text-white">
        About <span className="text-[#DC143C]">Me</span>
      </h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <img
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-[#DC143C]"
            src={aboutImage.src || aboutImage}
          />
          <span className="font-medium font-sans dark:text-white">
            {data?.about?.aboutImageCaption || "< I Build Stuff 🚀 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold dark:text-white">
              <span className="text-[#DC143C]">A Sainath Patro</span>
            </p>
            <p className="text-black w-fit rounded text-md dark:text-white font-semibold">
              {data?.about?.title}
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              {data?.about?.about}
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <a
                 href={"/ASainathPatroResume.pdf"}
                download="Sainath-Patro-Resume.pdf"
                className="text-sm md:text-base bg-[#DC143C] dark:bg-[#DC143C] text-white font-semibold w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
