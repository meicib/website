const Scrollspy = ({ activeSection }) => {
    const sectionIds = ["experience", "projects", "coursework"];
  
    return (
      <div>
        <div className="text-sm py-6">
          <ul className="py-1 flex flex-col justify-start">
            {sectionIds.map((id) => (
              <li key={id} className="mb-2 font-medium text-base hover:text-blue-500">
                <a
                  href={`#${id}`}
                  className={`transition-all ${
                    activeSection === id
                      ? "p-2 text-blue-500 font-bold" // Highlight the active section
                      : "text-neutral-300"
                  } hover:text-blue-500`}
                >
                  {id.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Scrollspy;
  






// const Scrollspy = () => {
//     return (
//         <div>
//             <div className="text-sm pb-5">
//                 <ul className="py-1 flex flex-col justify-start">
//                     <li className=""><a href="#experience">EXPERIENCE</a></li>
//                     <li className=""><a href="#projects" >PROJECTS</a></li>
//                     <li className=""><a href="#coursework">COURSEWORK</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Scrollspy;


{/* <div>
    <div id="scrollspy-smooth" className="text-sm pb-5">
        <ul className="py-1 flex flex-col justify-start">
            <li className={activeSection === 'experience' ? 'active' : ''}><a href="#experience" className="style={activeSection === 'section1' ? activeStyle : {}}">EXPERIENCE</a></li>
            <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects" className="hover:bg-indigo-400">PROJECTS</a></li>
            <li className={activeSection === 'coursework' ? 'active' : ''}><a href="#coursework"className="hover:bg-indigo-400">COURSEWORK</a></li>
        </ul>
    </div>
</div> */}