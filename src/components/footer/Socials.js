import { 
    BsInstagram, 
    BsPinterest, 
    BsTwitter, 
    BsYoutube
 } from 'react-icons/bs';
import {
    FooterSocials,
} from './styles';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { GrSnapchat } from 'react-icons/gr';

export default function index() {
    return (
        <FooterSocials>
            <section>
                <h3>Fique Conectado</h3>
                <ul>
                <li>
                        <a href="/" target='_blank'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <BsYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <BsPinterest />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <GrSnapchat />
                        </a>
                    </li>
                    <li>
                        <a href="/" target='_blank'>
                            <FaTiktok />
                        </a>
                    </li>
                </ul>
            </section>
        </FooterSocials>
    )
}