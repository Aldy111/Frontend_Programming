import Movie from "../../pages/movie/Movie";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";
const Movies = (props) => {

    const {title, movies,setMovies} = props;
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
        <div>
        <div className = {styles.container}>
            <section className = {styles.movies}>
                <h2 className = {styles.movies__title}>{title}</h2>
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
        </div>
    )
}

export default Movies;