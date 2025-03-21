import { useEffect, useState } from "react";
import { useStore } from "../../store/store.js";
import { MovieCard } from "./movieCard";
import { useDebounce } from "../../helpers/useDebounce.js";
import { fetchMovieByName } from "../../helpers/fetchMovieByName.js";

export function MovieList() {

    const { movieName, movieID, isName } = useStore();

    const [ list, setList ] = useState([]);

    useEffect(useDebounce(async function() {
        const data = await fetchMovieByName(movieName);  
        setList(data);
    }),[movieName, movieID, isName]);
    
    return (//poster, title, type, year, imdbID
        <div className="flex gap-5 flex-wrap">
            {
                list && list.map((e) => <MovieCard 
                                            poster={e.Poster}
                                            title={e.Title}
                                            Type={e.Type}
                                            key={e.imdbID}
                                            year={e.Year}
                                            imdbID={e.imdbID}
                                        />)
            }
        </div>

    )
}