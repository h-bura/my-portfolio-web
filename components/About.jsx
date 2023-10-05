import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about1.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm a self-taught front-end developer with a background in
            electronics. I have a deep passion for crafting websites and web
            applications. My journey began with mastering the fundamentals of
            HTML, CSS, and JavaScript, and I've since honed my skills further by
            building a diverse range of applications.
            <br />
            <br />
            As I progressed, I delved into more advanced technologies such as
            React, TypeScript, and Next.js. These tools have allowed me to
            create intricate and cutting-edge web applications. I specialize in
            JavaScript and possess professional expertise in React and
            TypeScript. Additionally, I have hands-on experience with Next.js,
            adding to my versatile skill set.
            <br />
            <br />I take great pride in my ability to blend my technical
            know-how with my creative flair, resulting in engaging and
            user-friendly web solutions.
          </p>
          <p className="py-2 text-gray-600"></p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-black">
              Take a look at some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
