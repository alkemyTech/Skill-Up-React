import styled from 'styled-components';

export const ContentPerfil = styled.section.attrs({
    className: 'd-flex center'
})`
    flex-direction: column;
    gap: 30px;
    position: relative;
    .sign-out {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        color: ${({ theme }) => theme.alerts.error};
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
        .sign-out {
            display: none;
        }
    }

    .content-avatar {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .avatar-user {
            width: 120px;
            height: 120px;
        }
        .greetings span {
            width: fit-content;
        }
    }
    .content-info {
        margin: 0 auto 20px;
    }

    .btn {
        margin: 20px 0 0 0;
    }
`;
