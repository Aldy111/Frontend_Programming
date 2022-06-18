import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

const NowPlaying = ()=> {
    //membuat dispatch untuk mentrigger
    const dispatch = useDispatch();

    /**
     * Melakukan use effact for fecth data
    */
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    const getNowPlayingMovies = async()=> {
        const response = await axios(ENDPOINTS.NOW);
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Now Playing"/>
        </div>
    )
}
export default NowPlaying