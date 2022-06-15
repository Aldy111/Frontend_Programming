import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Counter from "../components/counter";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Movies title = "Lates Movies" />
        </div>
    )
    // return(
    //     <Counter/>
    // )
}
//export Halaman Home
export default Home;