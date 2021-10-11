import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #032541;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 15px;

  & > a {
    font-size: 1.125rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li:last-child a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    color: #032541;
    background-color: #21d07a;
    font-weight: bold;
    font-size: 0.75rem;
    width: 50px;
    height: 25px;
    transition: filter 0.2s;
  }

  li:last-child a:hover {
    filter: brightness(0.8);
  }

  li + li {
    margin-left: 20px;
  }
`;
