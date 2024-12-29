import React from "react";
import Experience from './Experience';
import Projects from './Projects';
import Coursework from './Coursework';

const SectionsContainer = ({ sectionRefs }) => {
  return (
    <div className="pt-16 col-span-1 scroll-snap-type-y-mandatory relative overflow-y-scroll scroll-smooth">
        <Experience key="0" id="experience" ref={(el) => (sectionRefs.current[index] = el)}/>
        <Projects key="1" id="projects" ref={(el) => (sectionRefs.current[index] = el)}/>
        <Coursework key="2" id="coursework" ref={(el) => (sectionRefs.current[index] = el)}/>
    </div>
  );
};

export default SectionsContainer;
