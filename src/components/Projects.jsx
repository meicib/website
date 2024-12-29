import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="pb-4">
            <h1 className="mt-5 mb-5 text-start text-4xl font-medium">Projects</h1>
            <div>
                {PROJECTS.map((proj, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-start">
                        <div className="w-full max-w-2xl">
                            {
                                proj.link != null ?
                                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                                    <h6 className="mb-2 font-semibold underline hover:text-blue-400 transition duration-250">{proj.title}</h6>
                                </a>
                                :
                                <h6 className="mb-2 font-semibold">{proj.title}</h6>
                            }
                            <p className="mb-4 text-neutral-400">{proj.description}</p>
                            {proj.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium text-slate-300 bg-blue-950">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;