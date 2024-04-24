/* eslint-disable react/prop-types */
import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services({ hashRef }) {
  const expertiseItems = ["UI/UX Design", "Web Development", "Algorithms"];

  const toolBoxItems = [
    "JavaScript",
    "Typescript",
    "NodeJS",
    "HTML",
    "CSS",
    "TailwindCSS",
    "GSAP",
    "Framer Motion",
    "ReactJS",
    "NextJS",
  ];

  return (
    <section
      ref={hashRef}
      id="services"
      className="h-fit min-h-screen py-24"
      aria-label="services"
    >
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="My Expertise."
          description="I'm all about the magic of design and the wonders of the web. Each service I offer is a stepping stone towards creating unforgettable digital experiences that inspire and elevate. Let's make the digital realm a place for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="My Digital Toolbox."
          description="My toolbox is a curated collection of technologies that bring ideas to life. Constantly exploring, I deepen my knowledge in familiar territories and venture into new ones, always ready to expand my toolkit and embrace the future of tech."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
