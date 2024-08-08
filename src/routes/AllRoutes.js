import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route page="/" element={<MovieList />} />
      <Route page="movie/:id" element={<MovieDetail />} />
      <Route page="movies/popular" element={<MovieList />} />
      <Route page="movies/top" element={<MovieList />} />
      <Route page="movies/upcoming" element={<MovieList />} />
      <Route page="search" element={<Search />} />
      <Route page="*" element={<PageNotFound />} />
    </Routes>
  )
}
