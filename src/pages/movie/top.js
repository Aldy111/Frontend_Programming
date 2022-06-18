import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

const TopRated = ()=> {
    //membuat dispatch untuk mentriger
    const dispatch = useDispatch();
    useEffect(()=>{
        getTopRatedMovies();
    },[])
    const getTopRatedMovies =async ()=>{
        const response = await axios(ENDPOINTS.TOP);
        dispatch(updateMovies(response.data.results))
    }
    return(
        <div>
            <Hero/>
            <Movies title = "Top Rated"/>
        </div>
    )
}
export default TopRated