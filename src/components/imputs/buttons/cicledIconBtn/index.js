import { BiRightArrowAlt, BiLeftArrowCircle } from "react-icons/bi";
import { ButtonCicled, Icon } from "./styles";

export default function index({ type, text, icon }) {
    return (
        <ButtonCicled type={type}>{text}
            <Icon>
                <BiRightArrowAlt />
            </Icon>
        </ButtonCicled>
    );
}
