import styled from 'styled-components';

export const ContentSignUp = styled.div.attrs({
    className: 'd-flex center'
})`
    flex-direction: column;
    gap: 30px;
    min-height: 100vh;
    padding: ${({ theme }) => theme.padding.layoutMobile};

    @media ${({ theme }) => theme.breakpoints.tablet} {
        padding: 0;
    }
    .contenedor-imagen {
        text-align: center;
        margin: 20px 0 0 0;
    }

    .form {
        width: 235px;
        margin: 50px auto 50px;
        .btn {
            margin: 40px 0 0 0;
        }
    }

    .form-outline {
        width: 350px;
    }
`;
