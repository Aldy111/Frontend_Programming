import Movie from "../movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";
const Movies = () => {

    //membuat variabel movie biasa menjadi variabel state
    //usestate mengembalikan 2 buah data :
    //-nilai saat ini
    //-fungsi untuk mengubah state
    const [movies,setMovies] = useState(data);

    //fungsi tambahFilm berjalan ketika di klik
    const tambahFilm = () => {
        const movie = {
            id:nanoid(),
            title: "one piece stempade",
            year : "2021",
            type : "Movie",
            poster : "https://picsum.photos/300/400",
        }
        //LOGIC
        //panggil setMovies untuk mengubah data movies
        //ambil 12 data movies + movies
        //spread operator = copy and marge

        setMovies([...movies, movie]);
    
    }
    return(
        <div className = {styles.container}>
            <section className = {styles.movies}>
                <h2 className = {styles.movies__title}>Latest Movies</h2>
                <div className = {styles.movie__container}>
                {/* 
                * Looping movies
                * Render COmponent
                * Kirim Props movie
                */}
                {
                    movies.map(function(movie){
                        return <Movie key = {movie.id} movie = {movie}/>
                    })
                }
                </div>
                <button onClick = {tambahFilm}>add movie</button>
            </section>
        </div>
    )
}

export default Movies;