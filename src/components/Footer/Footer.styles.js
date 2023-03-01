import styled from 'styled-components';

export const ContentFooter = styled.section`
    padding: 0 0 100px 0;
    .label {
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
        padding: 0 0 50px;
    }
`;
