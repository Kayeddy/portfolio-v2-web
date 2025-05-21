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
  const [isExpanded, setIsExpanded] = useState(false);

  const hoverVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto" },
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div
        className="img group relative inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a target="_blank" rel="noreferrer" href={link}>
          <img
            className="w-screen duration-700 ease-in-out group-hover:scale-105"
            src={img}
            alt={alt}
            width="800"
            height="600"
          />
        </a>
        <AnimatePresence>
          {(isHovered || isMobile) && (
            <motion.span
              className="absolute bottom-4 left-0 right-0 mx-auto flex w-[80%] items-center justify-center self-center rounded-[10px] bg-black/50 p-4 align-middle text-body-1 font-light text-white backdrop-blur-lg 2xl:text-2xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={hoverVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={contentVariants}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="flex items-center"
              >
                {isMobile && !isExpanded
                  ? truncateText(description, 60)
                  : description}
                {isMobile && description.length > 60 && (
                  <motion.span
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    className="ml-2 cursor-pointer text-blue-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </motion.span>
                )}
              </motion.div>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4">
        <div className="mb-3 flex space-x-2">
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-2 py-2 text-body-4 text-secondary-600 2xl:text-2xl">
            {year}
          </p>
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-8 py-2 text-body-4 text-secondary-600 2xl:text-2xl">
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
