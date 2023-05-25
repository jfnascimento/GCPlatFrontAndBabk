import Link from 'next/link';
import {
    FooterLinks         
} from './styles';

export default function index() {
    return (
        <FooterLinks>
            {
                links.map((link, index) => (
                    <ul key={index}>
                        {index === 0 ? <img src="../../images/logo.jpg" alt="logo" /> : (
                        <b>{link.heading}</b>)}
                        {
                            link.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </FooterLinks>
    )
}

const links = [
    {
        heading: "SHOPPAY",
        links: [
            {
                name: "About us",
                link: "",
            },
            {
                name: "Contact us",
                link: "",
            },
            {
                name: "Social Responsibility",
                link: "",
            },
            {
                name: "",
                link: "",
            },
        ],
    },
    {
        heading: "HELP & SUPPORT",
        links: [
            {
                name: "Shipping Info",
                link: "",
            },
            {
                name: "Returns",
                link: "",
            },
            {
                name: "How To Order",
                link: "",
            },
            {
                name: "How To Track",
                link: "",
            },
            {
                name: "Size Guide",
                link: "",
            },
        ],
    },
    {
        heading: "Customer service",
        links: [
            {
                name: "Customer service",
                link: "",
            },
            {
                name: "Terms and Conditions",
                link: "",
            },
            {
                name: "Consumers (Transactions)",
                link: "",
            },
            {
                name: "Take our feedback survey",
                link: "",
            },
        ],
    },
];