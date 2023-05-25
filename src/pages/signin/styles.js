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

// Signin component ==================================
export const LoginMain = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    padding: 3rem;
    &:last-of-type {
        margin-bottom: 3rem;
    }
`;
export const LoginHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 370px;
`;
export const LoginSvg = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #66666657;
    border-radius: 50%;
    display: grid;
    place-items: center;
    &:hover {
        color: ${theme.white};
        border-color: ${theme.primery};
        svg {
            fill: ${theme.primery};
        }
    }
    svg {
        width: 20px;
        height: 20px;
        fill: #222;
    }
`;
export const LoginSpan = styled.span`
    font-weight: 600;
    font-size: 14px;
    padding-left: 10px;
    a{
        padding-left: 5px;
        color: ${theme.primery};
        cursor: pointer;
        border-bottom: 1px solid ${theme.primery};
        padding-bottom: 5px;
    }
`;

export const LoginForm = styled.div`
    margin-top: 1rem;
    h1{
        font-size: 50px;
        margin: 1rem 0;
    }
    p{
        color: #96979b;
    }
    form{
        margin-top: 1rem;
    }
`;
export const LoginTitle = styled.h1``;
export const LoginLabel = styled.label``;
export const LoginInput = styled.input``;
export const LoginButton = styled.button``;
