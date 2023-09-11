/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieForm from "../../MovieForm";
import { useLocation } from "react-router-dom";

function EditMovie() {
    const location = useLocation();
    const [movieData, setMovieData] = useState({
        id: location.state.id,
        title: location.state.title,
        year: location.state.year,
        poster: "",
        posterURL: location.state.poster,
    });

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", movieData.title);
        formData.append("year", movieData.year);
        if (movieData.poster !== "") {
            formData.append("poster", movieData.poster);
        }

        fetch(`http://127.0.0.1:8000/api/movie/${movieData.id}`, {
            method: "PATCH",
            body: formData,
        })
            .then((response) => console.log(response.json()))
            .then(window.location.replace("/"));
    }

    return (
        <div className="flex justify-center items-center">
            <MovieForm
                movieData={movieData}
                setMovieData={setMovieData}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default EditMovie;
