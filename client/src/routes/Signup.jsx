import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.jsx";

function Signup() {
    const { registerUser } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={registerUser}
                className="flex flex-col gap-4 max-w-2xl w-5/6 m-4 p-6 border rounded-xl overflow-hidden"
            >
                <div className="flex flex-1 gap-2">
                    <label htmlFor="email" className="font-bold md:text-lg">
                        E-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="flex-1 border border-gray-400 rounded text-sm p-1"
                    ></input>
                </div>
                <div className="flex flex-1 gap-2">
                    <label htmlFor="username" className="font-bold md:text-lg">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="flex-1 border border-gray-400 rounded text-sm p-1"
                    ></input>
                </div>
                <div className="flex flex-1 gap-2">
                    <label htmlFor="password" className="font-bold md:text-lg">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="flex-1 border border-gray-400 rounded text-sm p-1"
                    ></input>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="px-6 py-1 rounded-lg border-2 border-slate-700 font-semibold hover:border-transparent hover:bg-blue-500 hover:text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
