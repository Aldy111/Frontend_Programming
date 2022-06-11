import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";
import Counter from "../components/counter";

const Home = () => {
    const [movies,setMovies] = useState(data);
    return (
        <div>
            <Hero/>
            <Movies title = "Lates Movies" movies = {movies} setMovies = {setMovies} />
            <AddMovieForm movies = {movies} setMovies = {setMovies} />
        </div>
    )
    // return(
    //     <Counter/>
    // )
}
//export Halaman Home
export default Home;