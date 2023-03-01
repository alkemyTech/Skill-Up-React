import styled from 'styled-components';

export const ContentBackButton = styled.button`
    height: 1rem;
    width: 2rem;
    margin-left: 2rem;
    background-color: transparent;
    border: none;
    @media ${({ theme }) => theme.breakpoints.mobileM} {
        height: 2rem;
        width: 3rem;
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
        height: 2rem;
        width: 3rem;
        margin-left: 0;
        ::after {
            position: absolute;
            margin-left: 1rem;
            top: 8px;
            content: 'Atrás';
        }
    }
`;
