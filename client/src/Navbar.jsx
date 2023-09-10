import { useState } from "react";
import CameraIcon from "@mui/icons-material/Camera";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-5">
            <a
                href="/"
                className="flex items-center flex-shrink-0 gap-1 text-white mr-6"
            >
                <CameraIcon />
                <span className="text-xl font-semibold">Movie Database</span>
            </a>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-slate-400 border-slate-600 hover:text-white hover:border-white"
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                    <MenuIcon />
                </button>
            </div>
            <div
                className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                    isNavExpanded ? "block" : "hidden"
                }
                `}
            >
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-4"
                    >
                        Add Movie
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-4"
                    >
                        Github
                    </a>
                </div>
                <div className="flex gap-4">
                    <button>
                        <a
                            href="#"
                            className="inline-block text-sm font-semibold tracking-wide px-4 py-2 leading-none rounded bg-blue-500 text-white hover:text-slate-700 hover:bg-white mt-4 lg:mt-0"
                        >
                            Sign Up
                        </a>
                    </button>
                    <button>
                        <a
                            href="#"
                            className="inline-block text-sm font-semibold tracking-wide px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-00 hover:bg-white mt-4 lg:mt-0"
                        >
                            Log In
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;