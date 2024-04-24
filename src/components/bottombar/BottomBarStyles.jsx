import { Link } from "react-router-dom";
import styled from "styled-components";

export const BottomBarContainer = styled.div`
  width: 100%;
  box-shadow: 0 13px 18px -14px #888888;
  background: #ffffff;
`;

export const BottomBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70vw;
  max-width: 1240px;
  height: 40px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const BlackLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  margin: 0 8px;
  &:hover {
    color: #ff0000;
  }
`;
