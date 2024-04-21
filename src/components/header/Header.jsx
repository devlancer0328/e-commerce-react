import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import {
  HeaderContainer,
  HeaderBar,
  LogoContainer,
  HeaderLinksContainer,
  StyledLink,
  CounterItems,
} from "./HeaderStyles";
import { ShopContext } from "../../context/ShopContext";
import BuyItLogo from "./../../assets/img/logo/BuyIT-logo-transparent.png";

export const Header = () => {
  const { totalQuantity } = useContext(ShopContext);

  return (
    <HeaderContainer>
      <HeaderBar>
        <LogoContainer>
          <StyledLink to="/e-commerce-react/">
            <img src={BuyItLogo} alt="BuyIt Logo" width={112} height={56} />
          </StyledLink>
        </LogoContainer>
        <HeaderLinksContainer>
          <Link to="/e-commerce-react/cart">
            <GrCart style={CartButton} />
            <CounterItems>{totalQuantity}</CounterItems>
          </Link>
        </HeaderLinksContainer>
      </HeaderBar>
    </HeaderContainer>
  );
};

const CartButton = {
  fontSize: "24px",
  filter: "invert(100%)",
};
