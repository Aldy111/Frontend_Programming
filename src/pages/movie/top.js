import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

const TopRated = ()=> {
    const [movies,setMovies ]= useState([]);

    useEffect(()=>{
        getTopRatedMovies();
    },[])
    const getTopRatedMovies =async ()=>{
        const response = await axios(ENDPOINTS.TOP);
        setMovies(response.data.results)
    }
    return(
        <div>
            <Hero/>
            <Movies title = "Top Rated" movies = {movies}/>
        </div>
    )
}
export default TopRated