import { useEffect, useState } from "react";
import { fetchMovieByID } from "../helpers/fetchMovieByID.js";
import { useStore } from "../store/store.js";
import { NotFound } from "./notFound.jsx";

const key = import.meta.env.VITE_OMDB_API_KEY;
export function MoviePage() {

    const { movieID } = useStore();
    const [ movie, setMovie ] = useState()

    async function fetchData() {
      
      if(movieID == '') return;
      const data = await fetchMovieByID(movieID);
      console.log(data);
      if(data.Response == 'False') {
          
      } else {
          setMovie(data);
      }
    }
    useEffect(() => {
        fetchData();
    },[movieID]);

    return (
        // <div>
        //     { movie && 
        //         <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        //           {/* Hero Section */}
        //           <div
        //             className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
        //             style={{ backgroundImage: `url(${movie.Poster})` }}
        //           >
        //             <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 rounded-lg">
        //               <h1 className="text-3xl font-bold">{movie.Title} ({movie.Year})</h1>
        //               <p className="text-lg mt-2">⭐ IMDb: {movie.imdbRating}/10</p>
        //             </div>
        //           </div>
            
        //           {/* Movie Info */}
        //           <div className="mt-6 grid grid-cols-2 gap-6">
        //             <div>
        //               <p><span className="font-bold">Director:</span> {movie.Director}</p>
        //               <p><span className="font-bold">Actors:</span> {movie.Actors}</p>
        //               <p><span className="font-bold">Genre:</span> {movie.Genre}</p>
        //               <p><span className="font-bold">Box Office:</span> {movie.BoxOffice}</p>
        //             </div>
        //             <div>
        //               <p><span className="font-bold">Released:</span> {movie.Released}</p>
        //               <p><span className="font-bold">Runtime:</span> {movie.Runtime}</p>
        //               <p><span className="font-bold">Awards:</span> {movie.Awards}</p>
        //               <p><span className="font-bold">Country:</span> {movie.Country}</p>
        //             </div>
        //           </div>
            
        //           {/* Ratings */}
        //           <div className="mt-6">
        //             <h3 className="text-xl font-bold">Ratings:</h3>
        //             {movie.Ratings.map((rating, index) => (
        //               <p key={index} className="mt-2">🎟 {rating.Source}: {rating.Value}</p>
        //             ))}
        //           </div>
            
        //           {/* Plot */}
        //           <div className="mt-6">
        //             <h3 className="text-xl font-bold">Plot:</h3>
        //             <p className="text-gray-300">{movie.Plot}</p>
        //           </div>
            
        //           {/* Buttons */}
        //           <div className="mt-6 flex space-x-4">
        //             <a
        //               href={`https://www.imdb.com/title/${movie.imdbID}`}
        //               target="_blank"
        //               className="px-4 py-2 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
        //             >
        //               View on IMDb
        //             </a>
        //             <button className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
        //               Watch Trailer
        //             </button>
        //           </div>
        //         </div>
        //     }
        // </div>

        <div>
          {
            (movie == 'error') ? <div>Somthing Went Wrong</div> :

            (
              (movie) ? <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
                         {/* Hero Section */}
                         <div
                           className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
                           style={{ backgroundImage: `url(${movie.Poster})` }}
                         >
                           <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 rounded-lg">
                             <h1 className="text-3xl font-bold">{movie.Title} ({movie.Year})</h1>
                             <p className="text-lg mt-2">⭐ IMDb: {movie.imdbRating}/10</p>
                           </div>
                         </div>
              
                         {/* Movie Info */}
                         <div className="mt-6 grid grid-cols-2 gap-6">
                           <div>
                             <p><span className="font-bold">Director:</span> {movie.Director}</p>
                             <p><span className="font-bold">Actors:</span> {movie.Actors}</p>
                             <p><span className="font-bold">Genre:</span> {movie.Genre}</p>
                             <p><span className="font-bold">Box Office:</span> {movie.BoxOffice}</p>
                           </div>
                           <div>
                             <p><span className="font-bold">Released:</span> {movie.Released}</p>
                             <p><span className="font-bold">Runtime:</span> {movie.Runtime}</p>
                             <p><span className="font-bold">Awards:</span> {movie.Awards}</p>
                             <p><span className="font-bold">Country:</span> {movie.Country}</p>
                           </div>
                         </div>
              
                         {/* Ratings */}
                         <div className="mt-6">
                           <h3 className="text-xl font-bold">Ratings:</h3>
                           {movie.Ratings.map((rating, index) => (
                             <p key={index} className="mt-2">🎟 {rating.Source}: {rating.Value}</p>
                           ))}
                         </div>
              
                         {/* Plot */}
                         <div className="mt-6">
                           <h3 className="text-xl font-bold">Plot:</h3>
                           <p className="text-gray-300">{movie.Plot}</p>
                         </div>
              
                         {/* Buttons */}
                         <div className="mt-6 flex space-x-4">
                           <a
                             href={`https://www.imdb.com/title/${movie.imdbID}`}
                             target="_blank"
                             className="px-4 py-2 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
                           >
                             View on IMDb
                           </a>
                           <button className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                             Watch Trailer
                           </button>
                         </div>
                       </div> :
                       <NotFound/>
            )
          }
        </div>
    )
}