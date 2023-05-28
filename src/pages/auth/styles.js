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
    errror_color: "#ed4337",
    success_color: "#6cc070",
};

export const Forgot = styled.div`
    min-height: (100vh - 540px);
    display: grid;
    place-items: center;
`;


export const ForgotHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const ForgotSvg = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #66666657;
    border-radius: 50%;
    display: grid;
    place-items: center;
    &:hover {
        color: ${theme.white};
        //border-color: ${theme.primery};
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
export const ForgotSpan = styled.span`
    font-weight: 600;
    font-size: 14px;
    //padding-left: 10px;
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
        margin: 0;
    }
    p{
        color: #96979b;
    }
    form{
        margin-top: 2rem;
    }
`;


export const ForgotPassword = styled.div`
    color: #666;
    padding-top: 1rem;
    font-size: 14px;
    width: fit-content;
    height: 40px;
    &:hover{
        color: ${theme.primery};
        border-bottom: ${theme.primery} 1px solid;
    }
`;
export const TopCol = styled.div`
    width: 100%;
    height: 50px;
    
`;

export const Success = styled.span`
    color: ${theme.success_color};
    font-size: 14px;
    padding: 10px;
    
    `;
export const Error = styled.span`
    color: ${theme.errror_color};
    font-size: 14px;
    padding: 10px;
    `;

