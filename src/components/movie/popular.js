import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import Movies from "../movies/Movies";

const Popular = ()=> {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const [movies , setMovies]  = useState([]);

    useEffect(()=> {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const response =  await axios(URL);
        setMovies(response.data.results);
    }

    console.log(movies)

    return(
        <div>
            <Hero/>
            <Movies movies = {movies}/>
        </div>
    )
}
export default Popular