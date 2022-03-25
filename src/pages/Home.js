import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Movies/>
            <AddMovieForm/>
            <Footer/>
        </div>
    )
}
//export Halaman Home
export default Home;