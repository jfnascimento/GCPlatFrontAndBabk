import styled from 'styled-components';

const theme = {
    primery: "#2f82ff",
    secondary: "#f8f8f8",
    danger: "#ff2f2f",
    warning: "#ffbf2f",
    success: "#2fff2f",
    info: "#2f82ff",
    light: "#f8f8f8",
    dark: "#222",
    white: "#fff",
    black: "#000",
    gray: "#f8f8f8",
    grayDark: "#666",
    grayLight: "#f8f8f8",
    blue: "#2f82ff",
    blueDark: "#2f82ff",
    blueLight: "#2f82ff",
    errror_color: "#ed4337",
    success_color: "#6cc070",
    shaddow_1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
};

//=================== Main =====================
export const HomeMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    
    gap: 10px;
    grid-template-areas: 
    "menu header header"
    "menu swipers user"
    "menu offers user";
    
    `;

//=================== Menu =====================
export const Menu = styled.div`
    grid-area: menu;
    height: 560px;
    box-shadow: ${theme.shaddow_1};
`;

//=================== Header ===================
export const Header = styled.div`
    grid-area: header;
    height: 40px;
    box-shadow: ${theme.shaddow_1};

`;
//=================== Offers ===================

export const Offer = styled.div`
    grid-area: offers;
    overflow: hidden;
    height: 220px;
    background: #fff;
    border-radius: 10px;
    box-shadow: ${theme.shaddow_1};
    background-image: url('../../../images/flash.webp');
    background-position: -275px -135px;
    background-size: cover;
`;

export const OffersMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    grid-template-areas: 
    "offer1 offer2 offer3";
`;


//=================== User =====================
export const User = styled.div`
    grid-area: user;
    height: 560px;
    box-shadow: ${theme.shaddow_1};
`;
