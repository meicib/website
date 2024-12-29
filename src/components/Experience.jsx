import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="pt-20 pb-4">
            <h1 className="mb-5 text-start text-4xl font-medium">Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-blue-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 pr-3 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-blue-950 px-2 py-1 text-sm font-medium text-slate-300">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Experience;