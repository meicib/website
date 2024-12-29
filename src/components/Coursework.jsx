import { COURSEWORK } from "../constants";

const Coursework = () => {
    return (
        <div className="pb-4">
            <h1 className="mt-5 mb-5 text-start text-4xl font-medium">Coursework</h1>
            <div>
                {COURSEWORK.map((semester, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-start ">
                        <div className="w-full max-w-2xl">
                            <h6 className="mb-2 font-semibold">{semester.year}</h6>
                            <ul className="list-none pl-5 text-sm">
                                {semester.courses_descs.map((cd, index) => (
                                    <li key={index} className="mb-1 text-neutral-400"><span className="font-medium">{cd.course}</span> - {cd.desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coursework;