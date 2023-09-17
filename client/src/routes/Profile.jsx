import { useContext, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import Catalogue from "../Catalogue";

function Profile() {
    const [watchlist, setWatchlist] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/watchlist/${user.user_id}/`)
            .then((response) => response.json())
            .then((data) => {
                setWatchlist(data.watchlist);
            });
    }, [user]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold m-8">Hello, {user.username}</h1>
            <div className="border-t-2 border-gray-300">
                <Catalogue movieList={watchlist} />
            </div>
        </div>
    );
}

export default Profile;
