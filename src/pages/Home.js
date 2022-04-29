import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";

const Home = () => {
    const [movies,setMovies] = useState(data);
    return (
        <div>
            <Hero/>
            <Movies movies = {movies} setMovies = {setMovies} />
            <AddMovieForm movies = {movies} setMovies = {setMovies} />
        </div>
    )
}
//export Halaman Home
export default Home;