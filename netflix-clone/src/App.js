import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
//import MovieList from "./components/MovieList/MovieList";
import FavLists from "./components/FavLists/FavLists"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/movielist" element={<MovieList />} /> */}
      <Route path="/fav" element={<FavLists />} />

    </Routes>
  );
}