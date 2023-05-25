import Link from "next/link";
import { CopyRightContainer } from "./styles";
import { IoLocationSharp } from "react-icons/io5";

export default function index({ country }) {
    return (
        <CopyRightContainer>
            <section>© 2023, All Rights Reserved by <a href="#">Ecommerce</a></section>
            <section>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                    <li>
                        <a>
                            <IoLocationSharp />
                            <span>{country.nome}</span>
                        </a>
                    </li>
                </ul>
            </section>
        </CopyRightContainer>
    )
}

const data = [
    {
      name: "Privacy Center",
      link: "",
    },
    {
      name: "Privacy & Cookie Policy",
      link: "",
    },
    {
      name: "Manage Cookies",
      link: "",
    },
    {
      name: "Terms & Conditions",
      link: "",
    },
    {
      name: "Copyright Notice",
      link: "",
    },
  ];