import styled from 'styled-components';

export const ContentTopUpBalance = styled.section.attrs({
    className: 'd-flex center'
})`
    font-weight: 300;
    flex-direction: column;
    gap: 3rem;
    .top {
        a .label {
            font-size: 1.2rem;
        }
    }
    .billSubmit {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    .billSubmit:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary};
    }
    .billsForm {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .billsForm input {
        border-radius: 5px;
        font-size: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
    }
    .billsForm label {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.white};
    }
    .card {
        width: 100%;
        background: ${({ theme }) => theme.colors.gradient};
        border-radius: ${({ theme }) => theme.rounded.l};
        transition: ${({ theme }) => theme.transition.default};
        padding: ${({ theme }) => theme.padding.card};
        text-align: center;
    }
    .card:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow.box};
    }
`;
