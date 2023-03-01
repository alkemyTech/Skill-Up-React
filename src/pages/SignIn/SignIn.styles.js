import styled from 'styled-components';

export const ContentSignIn = styled.div.attrs({
    className: 'd-flex center'
})`
    flex-direction: column;
    gap: 30px;
    height: 100vh;
    .contenedor-imagen {
        text-align: center;
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
