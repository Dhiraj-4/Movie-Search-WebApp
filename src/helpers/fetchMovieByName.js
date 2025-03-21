import axios from 'axios';

// http://www.omdbapi.com/?s=${name}&apikey=${key}

const key = import.meta.env.VITE_OMDB_API_KEY;

export async function fetchMovieByName(movieName) {

  try{
    const response = await axios.get(`http://www.omdbapi.com/?s=${movieName}&apikey=${key}`);
    console.log('Named search: ',response.data.Search);
    return response.data.Search;
  }catch(error) {
    console.error('invalid search');
    return 'error';
  } 
}