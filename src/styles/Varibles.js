const size = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px'
};

export const theme = {
    colors: {
        primary: '#133FDB',
        white: '#f5f5f5',
        gradient: 'linear-gradient(93.46deg, #133FDB 0%, rgba(183, 0, 77, 0.9) 103.75%)',
        overlay: 'rgba(33,33,33,0.25)',
        h_primary: '#0F30A8'
    },
    alerts: {
        error: '#FF5752',
        success: '#37A63E',
        info: '#0477BF',
        warning: '#F2BB16'
    },
    c_text: {
        principal: '#212121',
        gray: '#858585',
        white: '#ffffff',
        disabled: '#85858530'
    },
    rounded: {
        s: '5px',
        m: '10px',
        l: '16px',
        50: '50%'
    },
    shadow: {
        box: '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
        nav: '0px -3px 8px 0px rgba(0, 0, 0, 0.05)'
    },
    padding: {
        input: '9px 15px',
        button: '12px 20px',
        layoutMobile: '35px 23px 35px',
        layoutDesktop: '55px 23px 35px',
        card: '25px 16px',
        card_tablet: '35px 26px',
        modal: '30px'
    },
    transition: {
        default: 'all .3s linear'
    },

    breakpoints: {
        mobileM: `(min-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`
    }
};
