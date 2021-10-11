import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderContent, Navbar } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">WatchList</Link>
        <Navbar>
          <li>
            <Link to="/">Watch List</Link>
          </li>
          <li>
            <Link to="/watched">Watched</Link>
          </li>
          <li>
            <Link to="/add">+ ADD</Link>
          </li>
        </Navbar>
      </HeaderContent>
    </HeaderContainer>
  );
};
