import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return {
      movieList: ["Die hard", "Harry Potter"],
    };
  });

  function handleAddNewMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        ...prevState,
        movieList: prevState.movieList.concat([newMovie]),
      };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddNewMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};

export default MoviePage;
