import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function MovieCard({ id, poster, title, year }) {
    return (
        <li className="flex flex-col gap-2 p-4 border rounded-xl shadow-lg bg-gray-50 hover:bg-zinc-100 hover:scale-105 transition-all duration-200">
            <img
                src={poster}
                className="rounded-xl shadow-md border border-gray-300 aspect-[2/3]"
            ></img>
            <div>
                <span className="font-semibold">{title}</span>
                <p className="text-sm">{year}</p>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 border rounded-xl py-1 hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-200">
                    <VisibilityOutlinedIcon />
                </button>
                <button className="flex-1 border rounded-xl py-1 hover:border-transparent hover:bg-teal-500 hover:text-white transition-all duration-200">
                    <EditIcon />
                </button>
                <button className="flex-1 border rounded-xl py-1 hover:border-transparent hover:bg-red-500 hover:text-white transition-all duration-200">
                    <DeleteIcon />
                </button>
            </div>
        </li>
    );
}

export default MovieCard;
