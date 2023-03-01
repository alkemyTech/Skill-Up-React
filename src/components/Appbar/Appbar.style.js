import styled from 'styled-components';

export const ContentAppBarMobile = styled.div.attrs({
    className: 'd-flex center'
})`
    position: fixed;
    gap: 40px;
    width: 100vw;
    height: 50px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.c_text.white};
    /* nav-shadow- */
    box-shadow: ${({ theme }) => theme.shadow.nav};

    .icon {
        width: 24px;
        height: 24px;
        overflow: hidden;
        display: block;

        img {
            display: block;
            width: 24px;
            height: 24px;
            object-fit: contain;
            margin: 0;
            transition: ${({ theme }) => theme.transition.default};
        }

        .icon-default {
            transform: translateY(-23px);
        }
        .icon-active {
            transform: translateY(-30px);
        }
    }

    .active-menu .icon-default {
        transform: translateY(15px);
    }
    .active-menu .icon-active {
        transform: translateY(0px);
    }

    .centerNavButton .wrapper {
        position: relative;
        width: 60px;
        height: 60px;
        top: -25px;
        background: ${({ theme }) => theme.c_text.white};
        display: flex;
        justify-content: center;
        padding: 10px;
        /* nav-shadow- */
        box-shadow: ${({ theme }) => theme.shadow.nav};
        border-radius: ${({ theme }) => theme.rounded[50]};
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
        display: none;
    }
`;

export const ContentAppBar = styled.div`
    display: none;
    justify-content: space-between;
    padding: 10px 40px;
    background: ${({ theme }) => theme.colors.primary};

    .nav-menu {
        ul {
            gap: 40px;
        }
        li {
            a {
                transition: ${({ theme }) => theme.transition.default};
                color: ${({ theme }) => theme.c_text.white};
                &:hover {
                    color: ${({ theme }) => theme.c_text.gray};
                }
            }
        }
    }
    .signout {
        transition: ${({ theme }) => theme.transition.default};
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.c_text.gray};
        }
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
        display: flex;
    }
`;

export function CenterNavButtonSvg() {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.1032 27.8342C31.4946 20.5437 29.862 14.2645 27.6799 9.81239C25.2409 4.83596 22.6325 3.06686 20.6851 3.06686C18.7377 3.06686 16.1292 4.83596 13.6902 9.81239C11.5082 14.2646 9.87547 20.5437 9.26687 27.8342C12.7762 26.2683 16.6374 25.4028 20.6851 25.4028C24.7328 25.4028 28.594 26.2683 32.1032 27.8342ZM32.0561 31.1794C33.4758 31.8962 35.2454 30.8647 35.1437 29.219C34.1223 12.6954 28.038 0 20.6851 0C13.3322 0 7.24789 12.6954 6.22642 29.219C6.12469 30.8648 7.89426 31.8962 9.31404 31.1794C12.7532 29.4429 16.6105 28.4696 20.6851 28.4696C24.7597 28.4696 28.617 29.4429 32.0561 31.1794Z"
                fill="#212121"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.10717 35.3567C4.10986 35.3921 4.14707 35.8317 5.48448 36.3796C6.53842 36.8115 7.04568 36.7437 7.23495 36.666C7.35454 36.6168 7.53229 36.4878 7.63252 35.983C7.73629 35.4604 7.70897 34.7094 7.51946 33.7944C7.42154 33.3217 7.2847 32.8261 7.11525 32.3245C7.05614 32.365 6.99799 32.4049 6.94209 32.4435C6.23553 32.9323 5.45413 33.5095 4.86931 34.1108C4.22833 34.7698 4.09401 35.1835 4.10717 35.3567ZM6.71843 29.7538C6.67467 29.7867 6.61516 29.8297 6.53645 29.8847C6.40829 29.9744 6.28013 30.0613 6.13391 30.1604C5.98753 30.2597 5.82307 30.3712 5.62239 30.51C4.89992 31.0097 3.95796 31.6945 3.20412 32.4696C2.50645 33.1868 1.68685 34.2637 1.7835 35.5356C1.89063 36.9454 3.02699 37.9056 4.60595 38.5525C5.88512 39.0766 7.09613 39.2566 8.11523 38.8381C9.20399 38.391 9.72467 37.4154 9.9178 36.4428C10.1074 35.4879 10.0231 34.3884 9.80082 33.3156C9.57523 32.2264 9.19018 31.0825 8.70723 30.003L7.77304 27.915L6.71843 29.7538Z"
                fill="#212121"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.438 35.3567C36.4353 35.3921 36.3981 35.8317 35.0606 36.3796C34.0067 36.8115 33.4994 36.7437 33.3102 36.666C33.1906 36.6168 33.0129 36.4878 32.9126 35.983C32.8089 35.4604 32.8362 34.7094 33.0257 33.7944C33.1236 33.3217 33.2604 32.8261 33.4299 32.3245C33.489 32.365 33.5471 32.4049 33.603 32.4435C34.3096 32.9323 35.091 33.5095 35.6758 34.1108C36.3168 34.7698 36.4511 35.1835 36.438 35.3567ZM33.8267 29.7538C33.8704 29.7867 33.93 29.8297 34.0087 29.8847C34.1369 29.9744 34.265 30.0613 34.4112 30.1604C34.5576 30.2597 34.7221 30.3712 34.9227 30.51C35.6452 31.0097 36.5872 31.6945 37.341 32.4696C38.0387 33.1868 38.8583 34.2637 38.7616 35.5356C38.6545 36.9454 37.5181 37.9056 35.9392 38.5525C34.66 39.0766 33.449 39.2566 32.4299 38.8381C31.3412 38.391 30.8205 37.4154 30.6273 36.4428C30.4378 35.4879 30.5221 34.3884 30.7443 33.3156C30.9699 32.2264 31.3549 31.0825 31.8379 30.003L32.7721 27.915L33.8267 29.7538Z"
                fill="#212121"
            />
        </svg>
    );
}
