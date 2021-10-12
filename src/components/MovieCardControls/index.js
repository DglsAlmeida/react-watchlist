import { BsEye, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useMovie } from "../../context/useMovieContext";
import { MovieCardControlsContainer } from "./styles";

export const MovieCardControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useMovie();

  return (
    <MovieCardControlsContainer>
      {type === "wacthlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)}>
            <BsEye size={20} color="#FFF" />
          </button>
          <button onClick={() => removeMovieFromWatchlist(movie.id)}>
            <IoMdClose size={20} color="#FFF" />
          </button>
        </>
      )}

      {type === "wacthed" && (
        <>
          <button /*onClick={() => addMovieToWatched(movie)} */>
            <BsFillEyeSlashFill size={20} color="#FFF" />
          </button>
          <button /*onClick={() => removeMovieFromWatchlist(movie.id)} */>
            <IoMdClose size={20} color="#FFF" />
          </button>
        </>
      )}
    </MovieCardControlsContainer>
  );
};
