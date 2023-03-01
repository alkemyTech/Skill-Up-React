import styled from 'styled-components';

export const ContentContact = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    text-align: center;

    div div a div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        gap: 3rem;
        width: 10rem;
        height: 10rem;
        transform: scale(0.5);
        transition: all 1s;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    @media ${({ theme }) => theme.breakpoints.mobileM} {
        div div a div {
            transform: scale(0.7);
            transition: all 1s;
        }
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
        div div a div {
            transform: scale(1);
            transition: all 1s;
        }
        div div {
            display: inline-block;
            width: auto;
        }
    }
    @media ${({ theme }) => theme.breakpoints.laptop} {
    }
`;
