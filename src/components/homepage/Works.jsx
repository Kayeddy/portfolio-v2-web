/* eslint-disable react/prop-types */

import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef, hashRef }) {
  return (
    <div id="works" ref={hashRef} className="mt-[20%] md:mt-[150px]">
      <section
        ref={forwardedRef}
        className="nav-change overflow-hidden pt-[10%]"
      >
        <Heading title="Projects" />
        <div className="grid grid-cols-1 gap-16 mt-10 gap-y-10 md:grid-cols-12">
          {/* Project #1 */}
          <div className="col-span-1 md:col-span-12">
            <Projects
              link="https://throu.app"
              img={ibgroup}
              alt="Throu Investments Website"
              name="throu investments website"
              type="Blockchain development • Fullstack Development"
              year="2022"
              tools="ReactJS • TailwindCSS • JavaScript • Vite"
            />
          </div>
          {/* Project #2 */}
          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Projects
              link="https://threads-clone-web.vercel.app"
              img={memento}
              alt="personal threads clone website"
              name="personal threads clone website"
              type="Fullstack Development"
              year="2023"
              tools="ReactJS • NextJs • Typescript • TailwindCSS"
            />
          </div>
          {/* <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              link="https://realbusinessaccountants.netlify.app"
              img={acc}
              alt="real business accountant project mockup"
              name="real business accountants"
              type="Web Design • Frontend Development"
              year="2023"
              tools="HTML • CSS • JavaScript • Figma"
            />
          </div>
          <div className="col-span-1 pt-0 h-fit md:col-span-8 md:pt-20">
            <Projects
              link="https://godaddyuiclone.netlify.app"
              img={daddy}
              alt="godaddy clone page mockup"
              name="GODADDY LANDING PAGE CLONE"
              type="Frontend Development"
              year="2023"
              tools="HTML • TailwindCSS • JavaScript"
            />
          </div>
          <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              link="https://sunnysidechallenge.netlify.app"
              img={sunnyside}
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
