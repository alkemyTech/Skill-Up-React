import styled from 'styled-components';
import { theme } from '../../styles/Varibles';

export const ContentNotFound = styled.section`
    flex-direction: column;
    height: 80vh;
    img {
        width: 100%;
        height: 100%;
    }
    h3 {
        margin: 60px 0 25px;
    }
    a {
        display: block;
        color: ${theme.colors.primary};
        text-align: center;
        text-decoration: none;
        transition: ${theme.transition.default};
        text-decoration: underline;
    }
`;
