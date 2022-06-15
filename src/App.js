//Import Halaman Home
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CreateMovie from "./pages/movie/create";
import NowPlaying from "./pages/movie/now";
import Popular from "./pages/movie/popular";
import TopRated from "./pages/movie/top";
import Home from "./pages/Home";
import Detail from "./pages/movie/detail";


const App = () => {


  return (
    <div>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/create" element={<CreateMovie/>}/>
                <Route path="/movie/popular" element={<Popular/>}/>
                <Route path="/movie/now" element={<NowPlaying/>}/>
                <Route path="/movie/top" element={<TopRated/>}/>
                <Route path="/movie/:id" element={<Detail/>}/>
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
