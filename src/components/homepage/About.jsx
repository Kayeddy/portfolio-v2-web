/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section
      ref={aboutSection}
      aria-label="about me"
      className="h-fit min-h-screen"
    >
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="image of Edward standing in front of a mirror in a bathroom"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              So, what's my story?
            </h3>
            <p
              ref={body}
              className="translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
            >
              Greetings! I'm a spirited full-stack developer and UI/UX
              enthusiast from the stunning Archipelago of San Andres y
              Providencia, Colombia. 🌴
              <br />
              <br />
              My passion? Putting together form and function. I structure and
              develop engaging, responsive websites that captivate and offer a
              smooth user journey. 🖥️✨
              <br />
              <br />
              Beyond the screen, I'm an adventurer at heart, diving into the
              rich culture and natural beauty of our archipelago or sharing my
              crafts and tech on{" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://github.com/Kayeddy"
              >
                Github
              </a>
              . Discoveries, both in code and in the coral reefs, are what drive
              me. 🏝️📱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
