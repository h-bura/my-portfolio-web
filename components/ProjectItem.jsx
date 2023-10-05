import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  technologies,
}) => {
  return (
    <div className="relative  flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] py-2">
      <Image
        className="rounded-xl  group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className=" absolute hidden  group-hover:block  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex gap-3 sm:gap-8 ">
          <div className="flex flex-col justify-around items-center">
            <h3 className="text-xl sm:text-3xl text-white tracking-wider text-center">
              {title}
            </h3>
            <p className="py-1 sm:py-3 text-white text-center">{tech}</p>

            <div className="flex flex-col items-center lg:flex-row gap-2 sm:gap-4 ">
              <a href={projectUrl} target="_blank" rel="noreferrer">
                <button className="px-8 text-xs sm:text-base bg-white text-gray-700 py-2 hover:bg-gray-200 font-bold">
                  Code
                </button>
              </a>
              <a href={projectUrl} target="_blank" rel="noreferrer">
                <button className="px-8 text-xs sm:text-base bg-white text-gray-700 py-2 hover:bg-gray-200 font-bold">
                  Demo
                </button>
              </a>
            </div>
          </div>

          <div className="col-span-4 md:col-span-1 shadow-xl shadow-white border-2  rounded-xl ">
            <div className="p-2">
              <p className="text-center text-xl text-white font-bold pb-2 underline ">
                Technologies
              </p>
              <div className="text-white ">
                {technologies.map((tec, i) => (
                  <p className=" py-1 flex items-center " key={i}>
                    <RiRadioButtonFill className="pr-1" />
                    {tec}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
