import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TotalSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: max-content;
  margin: 16px 0 0 auto;
  border: 1px solid #ff0000;
  padding: 12px;
  p {
    margin: 4px 0;
  }
`;
