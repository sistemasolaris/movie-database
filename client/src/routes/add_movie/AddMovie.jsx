import { useState } from "react";
import MovieForm from "../../MovieForm";

function AddMovie() {
    const [movieData, setMovieData] = useState({
        title: "",
        year: "",
        poster: "",
        posterURL: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", movieData.title);
        formData.append("poster", movieData.poster);
        formData.append("year", movieData.year);

        fetch("http://127.0.0.1:8000/api/movie/", {
            method: "POST",
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

export default AddMovie;
