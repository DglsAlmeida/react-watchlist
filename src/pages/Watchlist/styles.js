import styled from "styled-components";

export const WatchListContainer = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #032541;
  }
`;

export const WatchlistContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
`;
