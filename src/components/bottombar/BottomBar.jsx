import React from "react";
import {
  BottomBarContainer,
  BottomBarLinks,
  BlackLink,
} from "./BottomBarStyles";

export const BottomBar = () => {
  return (
    <BottomBarContainer>
      <BottomBarLinks>
        <BlackLink to="/e-commerce-react/books">Books</BlackLink>
        <BlackLink to="/e-commerce-react/games">Games</BlackLink>
      </BottomBarLinks>
    </BottomBarContainer>
  );
};
