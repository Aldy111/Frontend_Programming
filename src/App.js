//Import Halaman Home
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CreateMovie from "./components/movie/create";
import NowPlaying from "./components/movie/now";
import Popular from "./components/movie/popular";
import TopRated from "./components/movie/top";
import Home from "./pages/Home";

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
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
