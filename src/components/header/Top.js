import { 
    TopMain, 
    TopContainer,
    TopList,
    DivFlex,
    LiImg,
} from './styles';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import UserMenu from './UserMenu';

export default function index({ country }) {
    const { data: session } = useSession();
    const [visible, setVisible] = useState(false);
    return (
        <TopMain>
            <TopContainer>
                <div></div>
                <TopList>
                    <li>
                        <LiImg src={country.bandeira} alt="logo" />
                    <span>{country.nome} / BRL</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Custumer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>
                    <li 
                        onClick={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                    {
                        session ? (
                            <li>
                                <DivFlex>
                                    <LiImg src={session.user.image} alt="user" />
                                    <span>{session.user.name}</span>
                                    <RiArrowDropDownFill />
                                </DivFlex>
                            </li>
                        ) : (
                            <li>
                                <DivFlex>
                                    <RiAccountCircleLine />
                                    <span>Account</span>
                                    <RiArrowDropDownFill />
                                </DivFlex>
                            </li>
                        )
                    }
                    {
                        visible ? (
                            <UserMenu session={session} />
                        ) : null
                    }
                    </li>
                </TopList>
            </TopContainer>
        </TopMain>
    )
}