import Movie from "../../pages/movie/Movie";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
const Movies = (props) => {

    const {title} = props;

    const movies = useSelector((store)=> store.movies.movies );

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
                
            </section>
        </div>
        </div>
    )
}

export default Movies;