import styled from "styled-components";

export const ItemCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border: 1px solid #ff0000;
  padding: 16px;
  margin: 8px 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageCartContainer = styled.div`
  display: flex;
`;

export const TextCartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 80px;
  left: 0;
  background-color: #ffffffdb;
  min-height: 52px;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const IDCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  white-space: pre;
  font-weight: 800;
  margin: 0 16px;
  border-radius: 0 0 8px 0;
  background-color: #ffffffdb;
  @media (max-width: 800px) {
    margin: 8px 0;
  }
`;

export const NameCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  padding: 8px;
`;

export const PriceCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 8px;
  font-size: 13px;
  text-align: center;
  strong {
    font-size: 16px;
  }
`;

export const CartBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 64px;
  height: 40px;
  margin: 0 16px;
  z-index: 1;
  border: none;
  background-color: #ffffff;
  color: #ff0000;
  border: 1px solid #ff0000;
  font-weight: 600;
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: "";
    background: #ffffffdb;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active::after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:hover {
    color: #000000;
    background-color: #ff0000;
  }
`;

export const ItemsCartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 24px;
  height: 24px;
  padding: 0 16px;
  margin: 0 8px;
  font-weight: 600;
  z-index: 2;
  &:empty {
    display: none;
  }
  @media (max-width: 800px) {
    margin: 8px 0;
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 13px;
    font-weight: 400;
    margin: 0;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
