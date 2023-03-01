import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: scale(0.8) ;
    }

    100% {
        transform: scale(1) translate(0, 0px);
    }
`;

export const ContentModal = styled.div`
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .content-modal {
        position: relative;
        background: ${({ theme }) => theme.c_text.white};
        border-radius: ${({ theme }) => theme.rounded.m};
        width: 300px;
        z-index: 1;
        padding: 30px;
        animation: ${animate} 0.3s linear;
        animation-delay: 0.3;

        .close-modal {
            position: absolute;
            width: 25px;
            height: 25px;
            right: -12.5px;
            top: -12.5px;
            border-radius: ${({ theme }) => theme.rounded[50]};
            background: ${({ theme }) => theme.c_text.white};
            box-shadow: ${({ theme }) => theme.shadow.box};
            transition: ${({ theme }) => theme.transition.default};
            cursor: pointer;
            img {
                width: 10px;
                height: 10px;
            }
            &:active {
                transform: scale(0.7);
            }
        }
    }
`;
