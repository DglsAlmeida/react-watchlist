import styled from "styled-components";

export const MovieCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const MovieCardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  height: 250px;
  width: 180px;
  align-items: center;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  &:hover {
    img {
      border: 3px solid #21d07a;
    }

    div {
      display: flex;
    }
  }
`;
