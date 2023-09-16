/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard.jsx";

function Catalogue({ movieList }) {
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-8 max-w-7xl">
            {movieList
                ? movieList.map((movieData) => {
                      return (
                          <MovieCard key={movieData.id} movieData={movieData} />
                      );
                  })
                : ""}
        </ul>
    );
}

export default Catalogue;
