import styled from "styled-components";

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

export const LoginInputContainer = styled.div`
    position: relative;
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 50px;
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    margin-bottom: 1rem;
    svg {
        width: 25px;
        height: 25px;
        stroke: #6666669a;
        fill: #6666669a;
        justify-self: center;
    }
    input {
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        &::placeholder {
            color: #aaa;
            font-weight: 500;
        }
    }
`;