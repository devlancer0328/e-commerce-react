import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin: 16px;
  &:hover {
    box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
    -webkit-box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
  }
  @media (max-width: 800px) {
    width: 40vw;
    margin: 8px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 40px;
  left: 0;
  background-color: #ffffffdb;
  min-height: 52px;
  width: 100%;
`;

export const IDContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: max-content;
  padding: 4px;
  border-radius: 0 0 8px 0;
  background-color: #ffffffdb;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  padding: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 8px;
  font-size: 13px;
  strong {
    font-size: 16px;
  }
`;

export const AddToCartBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 40px;
  z-index: 1;
  border: none;
  background-color: #ff0000;
  color: #ffffff;
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
  }
`;

export const ItemsCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: absolute;
  bottom: -14px;
  right: -9px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: #bbbbbb;
  font-weight: 600;
  z-index: 2;
  &:empty {
    display: none;
  }
`;
