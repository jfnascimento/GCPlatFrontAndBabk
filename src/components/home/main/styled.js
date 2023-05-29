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
    shaddow_1: "0px 0px 5px 0px rgba(0,0,0,0.75)",
};

export const HomeMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 10px;
    grid-template-areas: 
    "menu header header"
    "menu swipers user"
    "menu offers user";
    
    `;

export const Menu = styled.div`
    grid-area: menu;
    height: 560px;
    background: ${theme.warning};
    box-shadow: ${theme.shaddow_1};
`;
export const Header = styled.div`
    grid-area: header;
    height: 40px;
    background: ${theme.primery};
    box-shadow: ${theme.shaddow_1};

`;
export const Swipers = styled.div`
    grid-area: swipers;
    height: 300px;
    background: ${theme.danger};
    box-shadow: ${theme.shaddow_1};
`;
export const Offer = styled.div`
    grid-area: offers;
    height: 200px;
    background: ${theme.success};
    box-shadow: ${theme.shaddow_1};
`;
export const User = styled.div`
    grid-area: user;
    height: 560px;
    background: ${theme.info};
    box-shadow: ${theme.shaddow_1};
`;