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

// Footer component ==================================
export const FooterMain = styled.div`
    background: #f8f8f8;
    
`;
export const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-areas: 
        "payment"
        "links"
        "newsletter"
        "socials"
        "Copyright";
    ;
    gap: 3rem;
    padding: 1rem;
    @media (min-width: 800px){ 
        grid-template-areas:
            "links socials"
            "links newsletter"
            "Copyright payment"    
        ;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
    img{
        width: 140px;
        height: 60px;
        object-fit: contain;
    }
    h3{
        text-transform: uppercase;  
        font-size: 12px;
        font-weight: 700;
        color: #222;
    }

`;
export const FooterLinks = styled.div`
    display: grid;
    grid-area: links;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    ul{
        padding: 5px;
        b{
            text-transform: uppercase;
        }
        li{
            font-size: 12px;
            a{
                color: #666;
                line-height: 23px;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`;
export const FooterSocials = styled.div`
    grid-area: socials;
    section{
        ul{
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 1rem;
            li{
                font-size: 2rem;
                color: #666;
                &:hover{
                    color: ${theme.primery};
                }
            }
        }
    }
`;

// NewsLetter component ==================================
export const NewsLetterContainer = styled.div`
    grid-area: newsletter;
    p{
        margin-top: 10px;
        font-size: 12px;
        color: #666;
        a{
            color: ${theme.primery};
            text-decoration: underline;
        }
    }
`;
export const NewsLetterFlex = styled.div`
    display: flex;
    margin-top: 10px;
`;
export const NewsLetterInput = styled.input`
    flex: 1;
    outline: none;
    border: 1px solid #999;
    height: 40px;
    font-size: 14px;
    padding-left: 10px;
`;
export const NewsLetterButton = styled.button`
        width: 150px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        background: ${theme.primery};
        font-weight: 600;
        cursor: pointer;
        border-radius: 2px;
        color: ${theme.white};

`;

// Payment component ==================================
export const PaymentContainer = styled.div`
    grid-area: payment;
    
`;
export const PaymentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 1rem;
    img{
        width: 60px;
        height: 36px;
        object-fit: cover;
    }
`;

// CopyRight component ==================================
export const CopyRightContainer = styled.div`
    grid-area: Copyright;
    section{
        font-size: 12px;
        color: #666;
        padding-bottom: 10px;
        ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            column-gap: 2rem;
            li{
                position: relative;
                text-decoration: underline;
                &:after{
                    content: "";
                    width: 1px;
                    height: 15px;
                    background: #666;
                    position: absolute;
                    right: -1rem;
                }
                &:last-of-type::after{
                    display: none;
                }
            }
        }
    }
`;