import React from "react";
import { useMovie } from "../../context/useMovieContext";
import {
  Controls,
  ImgContainer,
  MovieInfoContainer,
  MovieReleaseDate,
  MovieTitle,
  ResultMovieCardContainer,
  ResultMovieCardContent,
} from "./styles";

export const ResultMovieCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched } = useMovie();

  const AddedInWatchlist = watchlist.find(
    (watchMovie) => watchMovie.id === movie.id
  );

  const AddedInWatched = watched.find(
    (watchMovie) => watchMovie.id === movie.id
  );

  const watchlistDisabled = AddedInWatchlist || AddedInWatched ? true : false;

  return (
    <ResultMovieCardContainer>
      <ResultMovieCardContent>
        {movie.poster_path ? (
          <ImgContainer>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title}`}
            />
          </ImgContainer>
        ) : (
          <div></div>
        )}
      </ResultMovieCardContent>

      <MovieInfoContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieReleaseDate>
          {movie.release_date ? movie.release_date.substring(0, 4) : ""}
        </MovieReleaseDate>
        <Controls>
          <button
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            ADD TO WATCHLIST
          </button>
        </Controls>
      </MovieInfoContainer>
    </ResultMovieCardContainer>
  );
};
