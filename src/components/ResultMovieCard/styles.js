import styled from "styled-components";

export const ResultMovieCardContainer = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const ResultMovieCardContent = styled.div`
  display: flex;
  align-items: center;

  div {
    height: 100px;
    width: 70px;
    background-color: #d3d3d3;
    border-radius: 5px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  height: 100px;
  width: 70px;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MovieTitle = styled.span`
  color: #032541;
  font-weight: 600;
`;

export const MovieReleaseDate = styled.span`
  color: #d3d3d3;
`;

export const Controls = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;

  button {
    padding: 8px 20px;
    border-radius: 5px;
    border: 0;
    font-weight: 600;
    font-size: 0.75rem;
    color: #032541;
    background-color: #21d07a;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
