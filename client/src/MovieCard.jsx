/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AuthContext from "./contexts/AuthContext";

function MovieCard({ movieData, preview = false }) {
    const [isEdit, setIsEdit] = useState(false);
    const { tokens, user, watchlist, updateWatchlist } =
        useContext(AuthContext);

    function handleToggleFromWatchlist() {
        if (!user || !watchlist) return;

        const watchlistEntry = watchlist.find(
            (entry) => entry.movie.id === movieData.id
        );

        // Add movie to watchlist if it isn't already in it
        if (!watchlistEntry) {
            fetch(`http://127.0.0.1:8000/api/watchlist/${user.user_id}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${String(tokens.access)}`,
                },
                body: JSON.stringify({
                    user: user.user_id,
                    movie: movieData.id,
                }),
            })
                .then(updateWatchlist());
        }

        // If movie is in watchlist, remove from watchlist
        else {
            fetch(
                `http://127.0.0.1:8000/api/watchlist/detail/${watchlistEntry.id}/`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${String(tokens.access)}`,
                    },
                }
            )
                .then(updateWatchlist());
        }
    }

    function handleDelete() {
        fetch(`http://127.0.0.1:8000/api/movie/${movieData.id}/`, {
            method: "DELETE",
        })
            .then((response) => console.log(response.json()))
            .then(window.location.reload());
    }

    return (
        <li className="flex flex-col gap-2 p-4 border rounded-xl shadow-lg bg-gray-50 hover:bg-zinc-100 hover:scale-105 transition-all duration-200">
            {isEdit && <Navigate to="/edit-movie/" state={movieData} />}
            <img
                src={preview ? movieData.posterURL : movieData.poster}
                className="rounded-xl shadow-md border border-gray-300 aspect-[2/3]"
            ></img>
            <div>
                <span className="font-semibold">{movieData.title}</span>
                <p className="text-sm">{movieData.year}</p>
            </div>
            {!preview ? (
                <div className="flex gap-2">
                    <button
                        onClick={handleToggleFromWatchlist}
                        className={
                            "flex-1 border rounded-xl py-1 transition-all duration-200 " +
                            (watchlist &&
                            watchlist
                                .map((watchlist) => watchlist.movie.id)
                                .includes(movieData.id)
                                ? "text-white bg-blue-500 border-transparent hover:bg-indigo-800"
                                : "hover:border-transparent hover:bg-blue-500 hover:text-white")
                        }
                    >
                        <VisibilityOutlinedIcon />
                    </button>
                    <button
                        onClick={() => setIsEdit(true)}
                        className="flex-1 border rounded-xl py-1 hover:border-transparent hover:bg-teal-500 hover:text-white transition-all duration-200"
                    >
                        <EditIcon />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex-1 border rounded-xl py-1 hover:border-transparent hover:bg-red-500 hover:text-white transition-all duration-200"
                    >
                        <DeleteIcon />
                    </button>
                </div>
            ) : (
                ""
            )}
        </li>
    );
}

export default MovieCard;
