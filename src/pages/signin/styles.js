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

// Signin component ==================================
export const LoginMain = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoginContainer = styled.div`
    padding: 3rem;
    &:last-of-type {
        margin-bottom: 3rem;
        @media (max-width: 790px) {
        margin-top: 0;
      }
    }
`;
export const LoginHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
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
export const LoginSpan = styled.span`
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

export const LoginSocials = styled.div`
    margin-top: 1rem;
    span{
        font-size: 14px;
        position: relative;
        color: #666;
        padding-left: 8rem;
        &:before,
        &:after{
            content: "";
            width: 130px;
            height: 1px;
            background: #66666648;
            position: absolute;
            top: 50%;
        }
        &:before{
        left: 103%;
        }
        &:after{
            right: 49%;
        }
    }

`;

export const LoginSocialWrap = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    gap: 1rem;
    padding-left: 3rem;
    img{
        width: 36px;
        cursor: pointer;
    }
`;
export const LoginSocialOr = styled.span`
    
    
`;
export const LoginSocialBtns = styled.div``;
export const LoginSocialBtn = styled.button`
    border: none;
    outline: none;
    width: 290px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding-left: 5%;
    gap: 10px;
    background: transparent;
    border: 1px solid #66666683;
    cursor: pointer;
`;
export const LoginSocialImg = styled.img``;

export const LoginTitle = styled.h1``;
export const LoginLabel = styled.label``;
export const LoginInput = styled.input``;
export const LoginButton = styled.button``;

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

