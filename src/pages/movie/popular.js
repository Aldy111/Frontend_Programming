import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

const Popular = ()=> {
    const [movies , setMovies]  = useState([]);

    useEffect(()=> {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const response =  await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Popular" movies = {movies}/>
        </div>
    )
}
export default Popular