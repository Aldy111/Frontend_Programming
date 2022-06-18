import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import DetailMovie from "../../components/DetailMovie"
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

const Detail = ()=>{
    //membuat dispatch untuk mentrigger
    const dispatch = useDispatch();
    const{id} = useParams();

    useEffect(()=> {
        getRecommendationMovies();
    },[id]);

    const getRecommendationMovies = async()=> {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
        dispatch(updateMovies(response.data.results))
    }
    return (
        <>
            <DetailMovie/>
            <Movies title = "Recomendations"/>
        </>
    );
}
export default Detail