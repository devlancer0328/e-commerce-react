import styled from "styled-components";

export const ShopTitle = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 26px;
    }
  }
`;

export const ShopProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
