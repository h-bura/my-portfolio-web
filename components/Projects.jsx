import Image from "next/image";
import Link from "next/link";
import React from "react";
import weatherImg from "../public/assets/projects/weather.png";
import chatImg from "../public/assets/projects/chat.png";
import films from "../public/assets/projects/films.png";
import ecommerceImg from "../public/assets/projects/e-commerce.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const chatTechnologies = ["React Js", "Javascript", "Firebase", "Context"];
  const weatherTechnologies = ["React Js", "Javascript", "WeatherMap API"];
  const ecommerceTechnologies = [
    "React Js",
    "Javascript",
    "Redux",
    "Bootstrap",
  ];
  const movieTechnologies = ["Next Js", "Tailwind", "Javascript", "IMDB API"];
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherImg}
            projectUrl="https://github.com/h-bura/react-weather-app"
            tech="React JS"
            technologies={weatherTechnologies}
          />
          <ProjectItem
            title="Chat App"
            backgroundImg={chatImg}
            projectUrl="https://github.com/h-bura/react-chat-app"
            tech="React JS"
            technologies={chatTechnologies}
          />
          <ProjectItem
            title="Movies App"
            backgroundImg={films}
            projectUrl="https://github.com/h-bura/nextjs-movie-app"
            tech="Next JS"
            technologies={movieTechnologies}
          />
          <ProjectItem
            title="E-Commerce App"
            backgroundImg={ecommerceImg}
            projectUrl="https://github.com/h-bura/react-e-commerce-app"
            tech="React JS"
            technologies={ecommerceTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
