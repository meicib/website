import React, { useRef, useEffect, useState } from "react";
import Profile from './components/Profile';
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import Scrollspy from './components/Scrollspy';

const App = () => {
  const scrollContainerRef = useRef(null); // Ref for the scrollable container
  const sectionRefs = useRef([]); // Ref for sections
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

    const container = scrollContainerRef.current; // Get the scrollable container
    if (container) {
      container.addEventListener("scroll", handleScroll); // Attach scroll listener
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll); // Cleanup listener
      }
    };
  }, [sectionIds]);

  return (
    <div className="h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-blue-900">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="grid grid-cols-2 h-screen">
        {/* Left Side */}
        <div className="sticky top-0 col-span-1 w-full flex flex-col justify-center h-screen px-16">
          <Profile />
          <Scrollspy activeSection={activeSection} />
          <div className="flex flex-row items-start justify-start w-full gap-4 text-2xl">
            <a href="https:www.linkedin.com/in/amelie-cibulka" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https:github.com/meicib" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:ameicib@berkeley.edu" target="_blank" rel="noopener noreferrer">
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>

        {/* Right Scrollable Container */}
        <div
          ref={scrollContainerRef} // Attach the ref here
          className="col-span-1 scroll-snap-type-y-mandatory relative overflow-y-scroll scroll-smooth"
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










// const App = () => {
//   return (
//     <div className="h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-blue-900">
//       {/* <div className='flixed top-0 -z-10 h-full w-full'></div> */}
//       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

//       <div className="grid grid-cols-2 h-screen">
//         <div className="sticky top-0 col-span-1 w-full flex flex-col justify-center h-screen px-12">
//           <Profile />

//           <Scrollspy />

//           <div className="flex flex-row items-start justify-start w-full gap-4 text-2xl">
//             <a href="https://www.linkedin.com/in/amelie-cibulka" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin />
//             </a>
//             <a href="https://github.com/meicib" target="_blank" rel="noopener noreferrer">
//               <FaGithub />
//             </a>
//             <a href="mailto:ameicib@berkeley.edu" target="_blank" rel="noopener noreferrer">
//               <FaEnvelopeSquare />
//             </a>
//           </div>
//         </div>

//         <div
//           className="col-span-1 scroll-snap-type-y-mandatory relative overflow-y-scroll scroll-smooth "
//         >
//           <div id="experience" className="pr-1 scroll-snap-align-start"><Experience /></div>
//           <div id="projects" className="scroll-snap-align-start"><Projects /></div>
//           <div id="coursework" className="scroll-snap-align-start"><Coursework /></div>
//         </div>
//       </div>
//     </div>
//   );
// };

//export default App;