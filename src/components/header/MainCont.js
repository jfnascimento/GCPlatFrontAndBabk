import Link from 'next/link';
import { 
    MainContainer, 
    MainImg, 
    MainLink, 
    MainMain,
    MainLinkCart, 
    MainCartToggle,
    Search,
    SearchIcon
} from './styles';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function index() {

    const { cart } = useSelector((state) => ({...state}));


    return (
        <MainMain>
            <MainContainer>
                <Link href="/">
                    <MainLink>
                        <MainImg src="../../images/logo.jpg" alt="logo" />
                    </MainLink>
                </Link>
                <Search>
                    <input type="text" placeholder="Search" />
                    <SearchIcon>
                        <RiSearch2Line />
                    </SearchIcon>
                </Search>
                <Link href="/cart">
                    <MainLinkCart>
                        <FaOpencart />
                        <MainCartToggle>{cart.length}</MainCartToggle>
                    </MainLinkCart>
                </Link>
            </MainContainer>
        </MainMain>
    )
}