import styled from 'styled-components';

export const ContentTransactions = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 3rem;
    }

    .article .date {
        display: block;
        margin: 8px 0 0 0;
    }

    .newTransactionForm {
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
    }
    @media screen and (max-width: 426px) {
        .date,
        .price,
        .detail {
            font-size: 1rem;
        }
    }
`;
