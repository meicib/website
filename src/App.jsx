import React, { useRef, useEffect, useState } from "react";
import Profile from './components/Profile';
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import Scrollspy from './components/Scrollspy';

const App = () => {
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const sectionIds = ["experience", "projects", "coursework"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        scrollContainerRef.current.scrollTop + window.innerHeight / 3;

      sectionRefs.current.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(sectionIds[index]);
        }
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sectionIds]);

  return (
    <div className="w-screen h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-blue-900 flex justify-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full max-w-screen-7xl">
        {/* Left Container (No scroll) */}
        <div className="md:sticky md:top-0 col-span-1 w-full flex flex-col justify-center md:h-screen p-8 md:p-0 pb-0 md:px-16">
          <Profile />
          <Scrollspy activeSection={activeSection} />
          <div className="flex flex-row items-start justify-start w-full gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/amelie-cibulka" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/meicib" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:ameicib@berkeley.edu" target="_blank" rel="noopener noreferrer">
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>

        {/* Right Container (Scrolls) */}
        <div
          ref={scrollContainerRef}
          className="col-span-1 md:scroll-snap-type-y-mandatory relative md:overflow-y-scroll scroll-smooth px-8 md:p-0"
        >
          <div id="experience" ref={(el) => (sectionRefs.current[0] = el)}>
            <Experience />
          </div>
          <div id="projects" ref={(el) => (sectionRefs.current[1] = el)}>
            <Projects />
          </div>
          <div id="coursework" ref={(el) => (sectionRefs.current[2] = el)}>
            <Coursework />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;