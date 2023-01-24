import React, { useState } from "react";
import { Route, Switch, Routes, Router } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({movies});
   
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/movies" element={<MoviesPage data={data} setState={setState} />}>
          <MoviesPage movies={movies} />
          <Route path="/" element={<div>Home</div>}>
        </Route>
        </Routes>
    </div>
  );
}

export default App;
