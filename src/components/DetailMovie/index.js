import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ENDPOINTS from "../../utils/endpoints";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";

const DetailMovie = ()=> {
    /**
     * menggunakan useParams
     * di gunaskan untuk menangkap parameter di routing
     */

    //siapkan id,usestate dan API_KEY
    const [movie,setMovie] = useState("");
    const genres = movie && movie.genres.map((genre)=> genre.name).join(",");
    const idTrailer = movie && movie.videos.results[0].key;
    const {id} = useParams();

    useEffect(()=>{
        getDetailMovie();
    },[id])

    const getDetailMovie = async()=> {
        const response = await axios(ENDPOINTS.DETAIL(id));

        setMovie(response.data);
    }
    console.log(movie);
    return (
            <StyledDetailMovie>
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="info">
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target = "_blank">Watch Trailer</Button>
                </div>
            </StyledDetailMovie>
    )
}

export default DetailMovie