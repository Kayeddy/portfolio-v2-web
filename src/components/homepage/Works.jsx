/* eslint-disable react/prop-types */

import throu from "/src/assets/images/throu.webp";
import gdc from "/src/assets/images/gdc.webp";
// import threadsy from "/src/assets/images/threadsy.webp";
import c2p_launch from "/src/assets/images/c2p_launch.webp";
import gunny from "/src/assets/images/gunny-games.webp";

import tigerKing from "/src/assets/images/tiger-king.webp";
import maxxwin from "/src/assets/images/maxx_win.webp";

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
              alt="throu_investments_platform"
              name="Throu investments"
              type="Blockchain development • Fullstack Development"
              year="2022"
              tools="ReactJS • TailwindCSS • JavaScript • Vite "
              description="Platform that allows the tokenization of real estate assets, making it easier for investors to buy and sell fractions of properties."
            />
          </div>

          {/* Project #2 */}

          <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              link="https://connect2petlaunch-kayeddys-projects.vercel.app/"
              img={c2p_launch}
              alt="connect_2_pet_pre_launch_website"
              name="CONNECT2PET PRE-LAUNCH"
              type="Web Design • Frontend Development"
              year="2024"
              tools="ReactJS • SCSS • Figma • Vite"
              description="pre-launch website of Maski, formerly known as Connect2Pet. This website was designed to track and engage potential users in the pet adoption community that would be interested in using the official version of the platform."
            />
          </div>

          {/* Project #3 */}

          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Projects
              link="https://gunny-games-web.vercel.app/"
              img={gunny}
              alt="gunny_games_official_website"
              name="GUNNY GAMES"
              type="Web Design • Frontend Development"
              year="2024"
              tools="NextJs • Typescript • TailwindCSS • SASS • Figma"
              description="Gunny Games Studios is a pioneering video game development company that integrates blockchain technology to deliver an enhanced and unique user experience."
            />
          </div>

          {/* Project #4 */}

          <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
            <Projects
              link="https://tigerfarttoken.com"
              img={tigerKing}
              alt="Tiger_king_memecoin_website"
              name="Tiger King memecoin"
              type="Web Design • Frontend Development"
              year="2025"
              tools="Figma • ReactJs • Typescript • TailwindCSS • Vite"
              description="Tiger Fart Token is a meme cryptocurrency that combines humor with blockchain technology. The website keeps it simple—offering direct links to the social media and the official contract address. No fluff, just the essentials for those who want to follow the chaos or dive right in."
            />
          </div>

          {/* Project #5 */}

          <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              link="https://maxxwin.io/"
              img={maxxwin}
              alt="maxx_win_memecoin_website"
              name="$69420 memecoin"
              type="Web Design • Frontend Development"
              year="2025"
              tools="Figma • ReactJs • Javascript • TailwindCSS • Vite"
              description="$69420: The memecoin for winners. Born from community vibes, built for the crypto curious. The website delivers just what you need—contract address, trading links, and social channels. No complicated stuff, just a clean space to join the ride."
            />
          </div>

          {/* Project #6 */}

          <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              link="https://globaldeveloperclubs.com"
              img={gdc}
              alt="global_developers_club_official_website"
              name="GlOBAL DEVELOPERS CLUB"
              type="Web Design • Fullstack Development "
              year="2023"
              tools="NextJs • Typescript • TailwindCSS • MongoDB"
              description="At the Global Developers Club, we provide exclusive resources and support from our partners to help you and your co-founders or team members take your project to the next level. From the initial idea to a fully developed product, we are here to assist you every step of the way."
            />
          </div>

          {/* <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              link="https://gacha.gunnygames.com/"
              img={gunnyGacha}
              alt="gunny's gacha interface website"
              name="Gunny Gacha Interface"
              type="Web Design • Frontend Development"
              year="2024"
              tools="ReactJS • TailwindCSS • Figma • Vite"
              description="Gunny Games Gacha is Gunny Games' official platform, where users can win prizes and earn HERO tokens, the company's official cryptocurrency."
            />
          </div> */}

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
        </div>
      </section>
    </div>
  );
}
