import React, { useCallback, useState } from "react";
import { AddMovieContainer, AddMovieContent } from "./styles";

export const AddMovie = () => {
  const [search, setSearch] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);

  const handleInputChange = useCallback(
    (e) => {
      setSearch(e.target.value);

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
      )
        .then((res) => res.json())
        .then((data) => setMoviesResult(data));
    },
    [search]
  );

  return (
    <AddMovieContainer>
      <AddMovieContent>
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={handleInputChange}
        />

        {moviesResult?.results?.length > 0 && (
          <ul>
            {moviesResult.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </AddMovieContent>
    </AddMovieContainer>
  );
};
