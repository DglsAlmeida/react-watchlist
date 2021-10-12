import styled from "styled-components";

export const MovieCardControlsContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: none;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0.7;

    &:hover {
      border: 1px solid #fff;
    }

    svg {
      color: #fff;
    }
  }
`;
