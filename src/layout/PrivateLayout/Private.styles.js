import styled from 'styled-components';

export const ContentPrivateLayout = styled.div`
    min-height: 80vh;

    .content-pages {
        position: relative;
        min-height: 100vh;
        padding: ${({ theme }) => theme.padding.layoutMobile};

        @media ${({ theme }) => theme.breakpoints.tablet} {
            padding: ${({ theme }) => theme.padding.layoutDesktop};
            min-height: calc(100vh - 110px);
            overflow-y: auto;
        }
    }
`;
