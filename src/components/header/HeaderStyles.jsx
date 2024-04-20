import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 13px 18px -14px #888888;
  background: linear-gradient(to right, #ff0000, #990000);
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  height: 60px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  font-size: 24px;
  a {
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #000000;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CounterItems = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: #bbbbbb;
  font-weight: 600;
  text-decoration: none;
  margin-left: 8px;
  &:empty {
    display: none;
  }
`;
