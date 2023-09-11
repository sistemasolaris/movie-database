import { useState, useEffect } from "react";
import MovieCard from "../../MovieCard.jsx";

function Catalogue() {
    const [movieList, setMovieList] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/movie/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovieList(data);
            });
    }, []);

    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-8 max-w-7xl">
                {movieList
                    ? movieList.map((movieData) => {
                          return (
                              <MovieCard
                                  key={movieData.id}
                                  movieData={movieData}
                              />
                          );
                      })
                    : ""}
            </ul>
        </div>
    );
}

export default Catalogue;
