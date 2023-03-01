import styled from 'styled-components';

export const ContentCashBalance = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.rounded.l};
    transition: ${({ theme }) => theme.transition.default};
    padding: ${({ theme }) => theme.padding.card};
    max-width: 500px;
    margin: 0 auto;

    @media ${({ theme }) => theme.breakpoints.tablet} {
        padding: ${({ theme }) => theme.padding.card_tablet};
    }
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow.box};
    }

    .saldo {
        margin: 20px 0 0 0;
        display: block;
    }
`;
