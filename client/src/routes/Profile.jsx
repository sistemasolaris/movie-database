import { useContext, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import Catalogue from "../Catalogue";

function Profile() {
    const { user, watchlist } = useContext(AuthContext);
    const [watchlistMovies, setWatchlistMovies] = useState("");

    useEffect(() => {
        if (!watchlist) return;
        setWatchlistMovies(watchlist.map((entry) => entry.movie));
    }, [watchlist, setWatchlistMovies]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold m-8">Hello, {user.username}</h1>
            <div className="border-t-2 border-gray-300">
                <Catalogue movieList={watchlistMovies} />
            </div>
        </div>
    );
}

export default Profile;
