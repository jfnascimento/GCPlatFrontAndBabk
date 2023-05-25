import styled from "styled-components";
const shadow1 = "rgba(99, 99, 99, 2) 0px 2px 8px 0px";

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
    outlined: "#f8f8f8",
};


// Header component ================================
export const Main = styled.div`
    height: 100%;
    box-shadow: ${shadow1};
`;

// Ad component ======================================
export const AdLink = styled.a`
    cursor: pointer;
`;
export const AdImage = styled.div`
    height: 54px;
    width: 100%;
    background-image: url("../../images/ad.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

// Top component =====================================
export const TopMain = styled.div`
    background: #f8f8f8f8;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    
`;
export const TopContainer = styled.div`
    max-width: 95%px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
export const TopList = styled.ul`
    display: flex;
    gap: 15px;
    li{
        position: relative;
        display: flex;
        align-items: center;
        //justify-content: center;
        gap: 4px;
        color: #666;
        cursor: pointer;
        
        img{
            width: 28px;
            height: 28px;
            object-fit: cover;
            border-radius: 50%;
        }
        svg{
            width: 20px;
            height: 20px;
            fill: #ccc;
        }
        span{
            font-size: 12px;
        }
        &::after{
            content: "";
            position: absolute;
            right: -8px;
            top: 50%;
            transform: translateY(-50%);
            height: 20px;
            background: #ccc;
        }
        &:last-of-type {
            &::after {
                display: none;
            }
        }
        &:hover {
            span {
                color: #222;
            }
            svg {
                fill: #666;
            }
        }
        @media (max-width: 768px) {
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4) {
                display: none;
            }
        }
    }
`;
export const TopLi = styled.li`
`;
export const LiImg = styled.img`    
`;
// Menu loged component ==============================
export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    svg{
        transform: scale(1.2);
        margin-right: 3px;
    }
`;

// UserMenu component =================================
export const UserMenuMain = styled.div`
    width: 280px;
    min-height: 200px;
    box-shadow: ${shadow1};
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    z-index: 99;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    h4{
        text-align: center;
        //margin-bottom: 1rem;
    }
`;
export const MenuDropdown = styled.div`
    display: flex !important;
    align-items: center;
    gap: 10px !important;
    width: 100%;
    svg{
        transform: scale(1.2);
        margin-right: 3px;
    }
`;
export const MenuFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    margin: 1rem auto;
    padding: 0 1rem;
    svg{
        transform: scale(1.2);
        margin-right: 3px;
    }
    img{
        width: 100px !important;
        height: 100px !important;
    }
`;
export const MenuImg = styled.img``;
export const MenuCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem;
    span{
        &:last-of-type{
            font-size: 14px;
            color: ${theme.primery};
            text-decoration: underline;
        }
    }

    
`;
export const MenuColButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 1rem;
    margin: 1rem 0;

    button{
        width: 100%;
        padding: 0.5rem 0;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
`;
export const Button = styled.button`
    color: ${theme.white};
    background:${theme.primery};
    &:hover{
        background: ${theme.grayDark};
    }
`;
export const Button2 = styled.button`
    color: ${theme.primery};
    background:${theme.outlined};
    &:hover{
        background: ${theme.white};
    }
`;
export const MenuLink = styled.a``;
export const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    li{
        display: flex;
        width: 100%;
        height: 30px;
        padding: 0.2rem 0;
        align-items: center;
        a{
            text-align: left !important;
            height: 100%;

            padding-left: 1rem;
        }
        &:hover{
            background: #eeeeeef8;
        }
    }
`;
export const MenuDiv = styled.div``;

// Main component =====================================
export const MainMain = styled.div`
    position: relative;
    height: 70px;
    display: flex;
    align-items: center;

`;
export const MainContainer = styled.div`
    max-width: 95%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
`;

export const MainImg = styled.img`
    width: 100px;
    margin-top:10px;
`;


export const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    background: #eeeeeebc;
    height: 40px;
    border-radius: 5px;
    input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: transparent;
        padding-left: 1rem;
    }
`;
export const SearchIcon = styled.div`
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: ${theme.primery};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    svg{
        fill: ${theme.white};
        transform: scale(1.2);
    }
`;
export const MainCartToggle = styled.span`
    
`;

export const MainLink = styled.a`
    
`;
export const MainLinkCart = styled.a`
    position: relative;
    cursor: pointer;
    svg{
        //transform: scale(1.2);
        width: 35px;
        height: 35px;
        fill: #666;
        cursor: pointer;
        &:hover{
            fill: ${theme.primery};
        }
    }
    span{
        position: absolute;
        top: -25px;
        right: -15px;
        width: 23px;
        height: 23px;
        background: ${theme.primery};
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: ${theme.white};
        font-weight: 600;
        font-size: 0.8rem;
    }
`;