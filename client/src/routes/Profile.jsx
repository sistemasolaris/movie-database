import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Catalogue from "../Catalogue";

function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold m-8">Hello, {user.username}</h1>
            <div className="border-t-2 border-gray-300">
                <Catalogue movieList={user.watchlist} />
            </div>
        </div>
    );
}

export default Profile;
