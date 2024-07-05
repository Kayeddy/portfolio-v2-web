import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Projects({
  name,
  img,
  alt,
  type,
  link,
  year,
  tools,
  description,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group relative inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute bottom-4 left-0 right-0 mx-auto flex w-[80%] items-center justify-center self-center rounded-[10px] bg-black/50 p-4 align-middle text-body-1 font-light text-white backdrop-blur-lg 2xl:text-2xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={hoverVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {description}
            </motion.span>
          )}
        </AnimatePresence>
      </a>
      <div className="mt-4">
        <div className="mb-3 flex space-x-2">
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-2 py-1 text-body-4 text-secondary-600 2xl:text-2xl">
            {year}
          </p>
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-2 py-1 text-body-4 text-secondary-600 2xl:text-2xl">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title font-medium uppercase text-primary-200 2xl:text-5xl">
            {name}
          </h3>
          <p className="text-body-2 font-light text-primary-400 2xl:text-4xl">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
