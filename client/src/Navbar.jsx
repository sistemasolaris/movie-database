import { useState, useContext } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from "./contexts/AuthContext";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { user } = useContext(AuthContext);
    const { logoutUser } = useContext(AuthContext);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-5">
            <a
                href="/"
                className="flex items-center flex-shrink-0 gap-1 text-white mr-6"
            >
                <VideoLibraryIcon />
                <span className="text-xl font-semibold">Movie Database</span>
            </a>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white"
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
                        href="/add-movie/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
                    >
                        Add Movie
                    </a>
                    <a
                        href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
                    >
                        Github
                    </a>
                </div>
                {user ? (
                    <div className="flex gap-4">
                        <button className="inline-block font-semibold tracking-wide px-4 py-2 leading-none rounded bg-blue-500 text-white hover:text-slate-700 hover:bg-white mt-4 lg:mt-0">
                            <a href="#">{user.username}</a>
                        </button>
                        <button
                            onClick={logoutUser}
                            className="inline-block text-sm font-semibold tracking-wide px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-700 hover:bg-white mt-4 lg:mt-0"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <a href="/signup/">
                            <button className="inline-block font-semibold tracking-wide px-4 py-2 leading-none rounded bg-blue-500 text-white hover:text-slate-700 hover:bg-white mt-4 lg:mt-0">
                                Sign Up
                            </button>
                        </a>
                        <a href="/login/">
                            <button className="inline-block text-sm font-semibold tracking-wide px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-700 hover:bg-white mt-4 lg:mt-0">
                                Log In
                            </button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
