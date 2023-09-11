/* eslint-disable react/prop-types */
import MovieCard from "./routes/root/MovieCard";

function MovieForm({ movieData, setMovieData, handleSubmit }) {
    // movieData and setMovieData are a state passed as a prop to this component

    function handlePosterChange(e) {
        setMovieData({
            ...movieData,
            poster: e.target.files[0],
            posterURL: URL.createObjectURL(e.target.files[0]),
        });
    }

    return (
        <form className="flex flex-col gap-4 max-w-2xl w-5/6 m-4 p-6 border rounded-xl overflow-hidden">
            <div className="flex flex-1 flex-wrap gap-4">
                <div className="flex flex-1 gap-2">
                    <label htmlFor="title" className="font-bold md:text-lg">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={movieData.title}
                        onChange={(e) =>
                            setMovieData({
                                ...movieData,
                                title: e.target.value,
                            })
                        }
                        className="flex-1 border border-gray-400 rounded text-sm p-1"
                    ></input>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="year" className="font-bold md:text-lg">
                        Year
                    </label>
                    <input
                        type="number"
                        name="year"
                        min="0"
                        max="9999"
                        value={movieData.year}
                        onChange={(e) =>
                            setMovieData({
                                ...movieData,
                                year: e.target.value,
                            })
                        }
                        className="flex-1 border border-gray-400 rounded text-sm p-1"
                    ></input>
                </div>
            </div>
            <div className="flex flex-1 gap-2">
                <label htmlFor="poster" className="font-bold md:text-lg">
                    Poster
                </label>
                <input
                    type="file"
                    name="poster"
                    onChange={handlePosterChange}
                ></input>
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-1 rounded-lg border-2 border-slate-700 font-semibold hover:border-transparent hover:bg-blue-500 hover:text-white"
                >
                    Submit
                </button>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="font-bold text-lg">Preview</span>
                <div className="w-3/4 sm:w-2/3 md:w-1/2">
                    <MovieCard
                        id="0"
                        poster={movieData.posterURL}
                        title={movieData.title}
                        year={movieData.year}
                        preview={true}
                    />
                </div>
            </div>
        </form>
    );
}

export default MovieForm;
