import styled from "styled-components";

export const AddMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const AddMovieContent = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 500px;
    height: 35px;
    background-color: #032541;
    border: 0;
    border-radius: 5px;
    outline: none;
    color: #fff;
    padding: 10px;

    &::placeholder {
      font-size: 1rem;
    }
  }

  ul {
    list-style-type: none;
  }
`;
