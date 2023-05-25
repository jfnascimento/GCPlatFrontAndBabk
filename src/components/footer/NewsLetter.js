import Link from 'next/link';
import {
    NewsLetterButton,
    NewsLetterContainer, 
    NewsLetterFlex,
    NewsLetterInput
} from './styles';

export default function index() {
    return (
        <NewsLetterContainer>
            <h3>SING UP FOR OUR NEWSLETER</h3>
            <NewsLetterFlex>
                <NewsLetterInput type="email" placeholder="Enter your email address" />
                <NewsLetterButton>Subscribe</NewsLetterButton>
            </NewsLetterFlex>
            <p>
                By signing up you agree to receive marketing emails from us. 
                <Link href="/"> Our Privacy & Cookie Policy</Link>
            </p>
        </NewsLetterContainer>
    )
}