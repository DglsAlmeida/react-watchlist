import { MovieCard } from "../../components/MovieCard";
import { useMovie } from "../../context/useMovieContext";
import { WatchedContainer, WatchedContent } from "./styles";

export const Watched = () => {
  const { watched } = useMovie();

  return (
    <WatchedContainer>
      <h1>Watched Movies</h1>
      <WatchedContent>
        {watched.length > 0 ? (
          <>
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="wacthed" />
            ))}
          </>
        ) : (
          <span>No movies in your list, add some!</span>
        )}
      </WatchedContent>
    </WatchedContainer>
  );
};
