import styled from 'styled-components';

export const ContentAdornos = styled.section`
    max-width: 100vw;
    &:before {
        content: '';
        position: fixed;
        right: -100px;
        top: -100px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: #f8e192;
        z-index: -1;
    }
    &:after {
        content: '';
        position: fixed;
        left: -150px;
        top: 200px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: rgba(47, 203, 252, 0.3);
        z-index: -1;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
        &:before {
            width: 40vw;
            height: 40vw;
        }
        &:after {
            width: 40vw;
            height: 40vw;
        }
    }
    @media ${({ theme }) => theme.breakpoints.laptop} {
        &:before {
            width: 20vw;
            height: 20vw;
        }
        &:after {
            width: 20vw;
            height: 20vw;
        }
    }
`;
