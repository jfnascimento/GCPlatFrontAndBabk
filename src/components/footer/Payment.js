import { PaymentContainer, PaymentWrap } from "./styles";

export default function indext() {
    return (
        <PaymentContainer>
            <h3>We Accept</h3>
            <PaymentWrap>
                <img src="../../images/payment/visa.webp" alt="visa" />
                <img src="../../images/payment/mastercard.webp" alt="visa" />
                <img src="../../images/payment/paypal.webp" alt="visa" />
            </PaymentWrap>
        </PaymentContainer>
    )
}