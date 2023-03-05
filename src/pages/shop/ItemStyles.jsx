import styled from "styled-components"

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    margin: 16px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
    }
`;

export const ImageContainer = styled.div`
    display: flex;
`;

export const TextContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    background-color: #FFFFFFDB;
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
    background-color: #FFFFFFDB;
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