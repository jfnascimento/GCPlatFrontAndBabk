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
    gray: "#ccc",
    grayDark: "#666",
    grayLight: "#f8f8f8",
    blue: "#2f82ff",
    blueDark: "#2f82ff",
    blueLight: "#2f82ff",
};

export const ButtonCicled = styled.button`
    position: relative;
    border: none;
    outline: none;
    width: 220px;
    height: 55px;
    border-radius: 55px;
    font-weight: 600;
    color: #fff;
    background: ${theme.primery};
    cursor: pointer;
    display: block;
    transition: all 0.3s ease;
    overflow: hidden;
    &:hover{
        color: ${theme.primery};
        background: ${theme.grayLight};
        box-shadow: ${theme.gray} 0px 0px 5px 0px;
    }
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: absolute;
    top: 7.5px;
    right: 6px;
    background: ${theme.grayLight};
    transition: all 0.9s ease;
    svg{
        fill: ${theme.primery};
        transform: scale(1.2);
    }
    ${ButtonCicled}:hover &{
        background: ${theme.gray};
        svg{
            fill: ${theme.grayDark};
        }
    }
`;