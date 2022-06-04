import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styles from "./Hero.module.css";
const Hero = () => {
    //membuat usestate destrucing array
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre)=> genre.name).join(",");
    const idTrailer = movie && movie.videos.results[0].key;

    /* const fetchMovie = async()=> {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);
        const data = await response.json();

        setMovie(data);
    } */

    const getTrandingMovie = async ()=> {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);
        return response.data.results[0];
    }

    const getDetailMovie = async ()=>{
        const trendingMovie = await getTrandingMovie();
        const id = trendingMovie.id;

        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);

        setMovie(response.data);
    }
    useEffect((getDetailMovie),[]);

    return(
        <div className = {styles.container}>
            <section className = {styles.hero}>
                <div className = {styles.hero__left}>
                    <h2 className = {styles.hero__title}>{movie.title}</h2>
                    <h3 className = {styles.hero__genre}>{genres}</h3>
                    <p className = {styles.hero__description}>{movie.overview}</p>
                    {/* <button className = {styles.hero__button} href={`https://www.youtube.com/watch?v=${idTrailer}`}>Watch</button> */}
                    {<Button as ="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank" >watch movie</Button>}
                </div>
                <div className = {styles.hero__right}>
                    <img className = {styles.hero__image} src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt={movie.Title} />
                </div>
            </section>
        </div>
    )
}

export default Hero