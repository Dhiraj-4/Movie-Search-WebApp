import axios from "axios";

const key = import.meta.env.VITE_OMDB_API_KEY;
export async function fetchMovieByID( movieID) {

    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${movieID}&apikey=${key}`);
        console.log(response.data);
        return response.data;
    }catch(error) {
        console.error('invalid search');
        return 'error';
    }
}