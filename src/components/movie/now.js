import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import Movies from "../movies/Movies";

const NowPlaying = ()=> {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    const [movies, setMovies] =  useState([]);

    /**
     * Melakukan use effact for fecth data
    */
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    const getNowPlayingMovies = async()=> {
        const response = await axios(URL);
        setMovies(response.data.results)
    }

    console.log(movies)
    return(
        <div>
            <Hero/>
            <Movies movies = {movies}/>
        </div>
    )
}
export default NowPlaying