import Navbar from './components/NavBar';
import Profile from './components/Profile';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Coursework from './components/Coursework';


const App = () => {
  return (
    <div className="h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-blue-900">
      {/* <div className='flixed top-0 -z-10 h-full w-full'></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* <div className='container'>
        <Navbar />
      </div> */}

      <div className="grid grid-cols-2 h-screen">
        <div className="sticky top-0 col-span-1 w-full flex flex-col justify-center h-screen px-12">
          <Profile />

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

        <div
          className="col-span-1 scroll-snap-type-y-mandatory relative overflow-y-scroll scroll-smooth "
        >
          <div data-section id="experience" className="pr-1 scroll-snap-align-start"><Experience /></div>
          <div data-section id="projects" className="scroll-snap-align-start"><Projects /></div>
          <div data-section id="coursework" className="scroll-snap-align-start"><Coursework /></div>
        </div>

        {/* <div data-twe-spy="scroll" data-twe-target="#scrollspy-smooth" className="col-span-1 scroll-smooth overflow-y-scroll h-screen">
          
        </div> */}
      </div>
    </div>
  );
};

export default App;