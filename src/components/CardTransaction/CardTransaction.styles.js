import styled from 'styled-components';

export const ContentCardTransaction = styled.div.attrs({
    className: 'card d-flex between'
})`
    .date {
        display: block;
        margin: 8px 0 0 0;
    }
    .amount h4 {
        font-size: 2rem;
        font-weight: 400;
    }
`;
