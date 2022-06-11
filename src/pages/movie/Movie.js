
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
const Movie = (props) => {
    //destrucing props
    const {movie} = props;
    return (
        <div className = {styles.movie}>
                <img className = {styles.movie__image} src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
                
                <Link to = {`/movie/${movie.id}`}>
                    <h3 className = {styles.movie__title}>{movie.title}</h3>
                </Link>
                    <div className = {styles.movie__bottom} >
                        <span className = {styles.movie__genre} >{movie.type}</span>
                        <p className = {styles.movie__date} >{movie.year || movie.release_date}</p>
                    </div>
        </div>
    )
}

export default Movie;