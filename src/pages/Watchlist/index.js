import { MovieCard } from "../../components/MovieCard";
import { useMovie } from "../../context/useMovieContext";
import { WatchListContainer, WatchlistContent } from "./styles";

export const Watchlist = () => {
  const { watchlist } = useMovie();

  return (
    <WatchListContainer>
      <h1>My Watchlist</h1>
      <WatchlistContent>
        {watchlist.length > 0 ? (
          <>
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="wacthlist" />
            ))}
          </>
        ) : (
          <span>No movies in your list, add some!</span>
        )}
      </WatchlistContent>
    </WatchListContainer>
  );
};
