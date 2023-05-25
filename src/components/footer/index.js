import { 
    FooterContainer, 
    FooterMain 
} from './styles';
import Link from './Link';
import Socials from './Socials';
import NewsLetter from './NewsLetter';
import Payment from './Payment';
import CopyRight from './Copyright';

export default function index({ country }) {
    return (
        <FooterMain>
            <FooterContainer>
                <Link />
                <Socials />
                <NewsLetter />
                <Payment />
                <CopyRight country={ country } />
            </FooterContainer>
        </FooterMain>
    )
}