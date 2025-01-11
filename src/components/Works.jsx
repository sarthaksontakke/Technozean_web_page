import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";
import { youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 rounded-xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
            <div className="flex gap-1 bg">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={link}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain invert"
                />
              </div>
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={youtube}
                  alt="demo link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-1 text-secondary text-[13px] h-[40px] overflow-hidden">
            {description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-secondary text-[15px] max-w-3xl leading-[25px]"
        >
          Our company has delivered diverse projects across industries, including tech solutions, infrastructure, software, marketing, and sustainability. We focus on excellence, creativity, and measurable impact in every initiative, from small-scale efforts to large enterprise projects.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
