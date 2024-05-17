/* eslint-disable react/prop-types */

import throu from "/src/assets/images/throu.webp";
import gdc from "/src/assets/images/gdc.webp";
import threadsy from "/src/assets/images/threadsy.webp";
import c2p_launch from "/src/assets/images/c2p_launch.webp";

import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef, hashRef }) {
  return (
    <div id="works" ref={hashRef}>
      <section
        ref={forwardedRef}
        className="nav-change h-fit min-h-screen overflow-hidden py-24"
      >
        <Heading title="Projects" />
        <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
          {/* Project #1 */}
          <div className="col-span-1 md:col-span-12">
            <Projects
              link="https://throu.app"
              img={throu}
              alt="Throu Investments Website"
              name="throu investments website"
              type="Blockchain development • Fullstack Development"
              year="2022"
              tools="ReactJS • TailwindCSS • JavaScript • Vite"
            />
          </div>

          {/* Project #2 */}
          <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
            <Projects
              link="globaldeveloperclubs.com"
              img={gdc}
              alt="global developers club website"
              name="Global developers Club"
              type="Web Design • Fullstack Development"
              year="2024"
              tools="Figma • NextJs • Typescript • TailwindCSS • Clerk • MongoDB"
            />
          </div>

          {/* Project #3 */}
          <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              link="https://connect2pet.app"
              img={c2p_launch}
              alt="connect2pet launch website"
              name="connect 2 pet launch website"
              type="Web Design • Frontend Development"
              year="2024"
              tools="ReactJS • SCSS • Figma • Vite"
            />
          </div>

          {/* Project #4 */}
          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Projects
              link="https://threads-clone-web.vercel.app"
              img={threadsy}
              alt="personal threads clone website"
              name="personal threads clone website"
              type="Fullstack Development"
              year="2023"
              tools="NextJs • Typescript • TailwindCSS • Clerk • MongoDB"
            />
          </div>

          {/* <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              link="https://connect2pet.app"
              img={c2p_launch}
              alt="connect2pet launch website"
              name="connect 2 pet launch website"
              type="Web Design • Frontend Development"
              year="2024"
              tools="ReactJS • SCSS • Figma • Vite"
            />
          </div> */}

          {/* <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              link="https://sunnysidechallenge.netlify.app"
              img={c2p_launch}
              alt="sunnyside project mockup"
              name="SUNNYSIDE LANDING PAGE"
              type="Frontend Development"
              year="2022"
              tools="HTML • TailwindCSS • JavaScript"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
