import { useStore } from "../../store/store";

export function MovieCard({ poster, title, year, imdbID, }) {

    const { setIsName, setMovieID } = useStore();

    function handler() {
        console.log(`let's go`);
        setIsName(true);
        setMovieID(imdbID);
        setMovieName(title);
    }

    return (
        <div onClick={handler}>
            <img src={poster} alt="#" />
            <span>{title}</span>
            <span> ({year})</span>
        </div>
    )
}