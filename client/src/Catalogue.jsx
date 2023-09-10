import { useState, useEffect } from "react";

function Catalogue() {
    const [movieList, setMovieList] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/movie/")
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data);
            });
    }, []);

    return (
        <ul>
            {movieList
                ? movieList.map((movie) => {
                      return <li key={movie.id}>{movie.title}</li>;
                  })
                : ""}
        </ul>
    );
}

export default Catalogue;
