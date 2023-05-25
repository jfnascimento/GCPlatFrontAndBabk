import Link from 'next/link';
import { 
    LoginContainer, 
    LoginHeader, 
    LoginMain, 
    LoginSvg,
    LoginSpan,

    LoginForm,
    LoginTitle,
} from './styles';
import LoginInput from '../../components/imputs/loginInput';

import { BiLeftArrowAlt } from 'react-icons/bi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const initialValues = {
    login_email: "",
    login_password: "",
};

export default function index() {
    
    const [ user, setUser ] = useState(initialValues);
    const { login_email, login_password } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const loginValidation = Yup.object().shape({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
        login_password: Yup.string().min(8, "Password must be at least 8 characters long.").required("Password is required."),
    });


    return (
        <LoginMain>
            <LoginContainer>
                <LoginHeader>
                    <LoginSvg>
                        <BiLeftArrowAlt />
                    </LoginSvg>
                    <LoginSpan>We'd br happy to join us!
                        <Link href="/">Go Store</Link>
                    </LoginSpan>
                </LoginHeader>
                <LoginForm>
                    <LoginTitle>Sign In</LoginTitle>
                    <p>
                        Get access to one of the best online store.
                    </p>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            login_email,
                            login_password,
                        }}
                        validationSchema={loginValidation}
                    
                    >
                    {
                        (form) => (
                            <Form>                            
                                <LoginInput 
                                    type="email"
                                    name="login_email"
                                    icon="email"
                                    placeholder="Email or Username"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="Password"
                                    name="login_password"
                                    icon="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </Form>
                        )
                    }  
                    </Formik>
                </LoginForm>
            </LoginContainer>
        </LoginMain>
    );
}