import icon from "../assets/me.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-6 w-screen">
            <div className="flex flex-shrink-0 items-center">
                <img src={icon} alt="logo" className="rounded-full size-16"/>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
            </div>
        </nav>
    );
};

export default Navbar;