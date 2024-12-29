import { PROFILE_CONTENT } from "../constants";

const Profile = () => {
    return (
        <div className="pb-1 lg:mb-35">
            <div className="flex flex-wrap w-full">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-4 text-5xl font-medium tracking-tight lg:mt-16 lg:text-6xl">
                            Mei Cibulka
                        </h1>
                        <span className="inline-block bg-gradient-to-r from-blue-500 via-slate-400 to-yellow-200 text-transparent bg-clip-text text-2xl font-medium-bold">
                            CS+DS @ Berkeley
                        </span>
                        <p className="my-2 py-3 tracking-tighter">
                            {PROFILE_CONTENT}
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Profile;