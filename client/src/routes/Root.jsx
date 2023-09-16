import { useState, useEffect } from "react";
import Catalogue from "../Catalogue.jsx";

function Root() {
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
            <Catalogue movieList={movieList} />
        </div>
    );
}

export default Root;
