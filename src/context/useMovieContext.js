import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initalState = {
  watchlist: localStorage.getItem("@ReactWatchlist:watchlist")
    ? JSON.parse(localStorage.getItem("@ReactWatchlist:watchlist"))
    : [],
  watched: localStorage.getItem("@ReactWatchlist:watched")
    ? JSON.parse(localStorage.getItem("@ReactWatchlist:watched"))
    : [],
};

const useMovieContext = createContext(initalState);

const UseMovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  const { watchlist, watched } = state;

  useEffect(() => {
    localStorage.setItem(
      "@ReactWatchlist:watchlist",
      JSON.stringify(watchlist)
    );
    localStorage.setItem("@ReactWatchlist:watched", JSON.stringify(watched));
  }, [watchlist, watched]);

  // Actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (movieId) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movieId });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  return (
    <useMovieContext.Provider
      value={{
        watchlist,
        watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
      }}
    >
      {children}
    </useMovieContext.Provider>
  );
};

const useMovie = () => useContext(useMovieContext);

export { UseMovieProvider, useMovie };
