import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";

const Home = () => {
    const [movies,setMovies] = useState(data);
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Movies movies = {movies} setMovies = {setMovies} />
            <AddMovieForm movies = {movies} setMovies = {setMovies} />
            <Footer/>
        </div>
    )
}
//export Halaman Home
export default Home;