import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    font-size: 24px;
`;

export const StyledLink = styled(Link)`
     text-decoration: none;
     font-weight: 600;
     color: #000000;
`;

export const HeaderLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`;