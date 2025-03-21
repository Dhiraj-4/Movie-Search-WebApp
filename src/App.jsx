import { useEffect } from 'react';
import './App.css'
import { InputField } from './components/inputField';
import { useStore } from './store/store.js';
import { MovieList } from './components/movieList/movieList';
import { MoviePage } from './components/MoviePage';

// http://www.omdbapi.com/?s=${name}&apikey=${key}

function App() {

  const { movieName, movieID, isName } = useStore();

  useEffect(() => {
    console.log(`MovieName: ${movieName}, MovieID: ${movieID}, isName: ${isName}`)
  },[movieID, movieName, isName])
  return (
   <>
   <InputField/>
   { isName ? <MovieList/> : <MoviePage/> }
   </> 
  )
}

export default App
