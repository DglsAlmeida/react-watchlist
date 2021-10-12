import { MovieCardControls } from "../MovieCardControls";
import { ImgContainer, MovieCardContainer, MovieCardContent } from "./styles";

export const MovieCard = ({ movie, type }) => {
  return (
    <MovieCardContainer>
      <MovieCardContent>
        <ImgContainer>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
          />
          <MovieCardControls movie={movie} type={type} />
        </ImgContainer>
      </MovieCardContent>
    </MovieCardContainer>
  );
};
