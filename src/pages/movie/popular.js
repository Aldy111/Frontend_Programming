import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

const Popular = ()=> {
    //membuat dispatch untuk mentriger
    const dispatch = useDispatch();

    useEffect(()=> {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const response =  await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Popular"/>
        </div>
    )
}
export default Popular