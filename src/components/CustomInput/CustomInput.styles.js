import styled from 'styled-components';

export const ContentCustomInput = styled.div`
    margin: 0 0 15px;
    transition: ${({ theme }) => theme.transition.default};
    label {
        display: flex;
        flex-direction: column;
    }
    .label {
        order: 0;
        display: block;
        margin: 0 0 7px 5px;
        color: ${({ theme }) => theme.c_text.gray};
        font-size: 1.4rem;
        transition: inherit;
        &:is(.label .input:focus) {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    .input {
        order: 1;
        border: 1px solid ${({ theme }) => theme.c_text.gray};
        padding: ${({ theme }) => theme.padding.input};
        background: transparent;
        display: block;
        width: 235px;
        transition: inherit;
        border-radius: ${({ theme }) => theme.rounded.s};
    }
    .input:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 1px 1px #83b6be inset, 0 0 8px #83b6be;
        outline: 0 none;
    }
    .input:disabled {
        background: ${({ theme }) => theme.c_text.disabled};
        color: ${({ theme }) => theme.c_text.gray};
    }

    .input:focus ~ .label {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:last-child {
        margin: 0;
    }
`;
