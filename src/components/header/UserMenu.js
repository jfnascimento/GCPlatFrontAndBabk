import Link from 'next/link';
import { 
    UserMenuMain, 
    MenuFlex,
    MenuImg,
    MenuDiv,
    Button,
    Button2,
    MenuCol,
    MenuUl,
    MenuColButton
  } from './styles';

  import { signOut, signIn } from 'next-auth/react';

export default function index({ session }) {    
    return (
        <UserMenuMain>
            <h4>Bem vindo a loja</h4>
            { session ? 
            (
                <MenuFlex>
                    <MenuImg src={session.user.image} alt="user" />
                    <MenuCol>
                        <span>Welcome back,</span>
                        <h3>{session.user.name}</h3>
                        <span onClick={() => signOut()}>Sign out</span>
                    </MenuCol>
                </MenuFlex>
            )
            :
            (
                <MenuDiv>
                    <MenuColButton>
                        <Button>Register</Button>
                        <Button2 onClick={() => signIn()}>Login</Button2>
                    </MenuColButton>
                </MenuDiv>
            )
            }
            <MenuUl>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Messeger Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/whishlist">Whishlist</Link>
                </li>
            </MenuUl>
        </UserMenuMain>
    )
}