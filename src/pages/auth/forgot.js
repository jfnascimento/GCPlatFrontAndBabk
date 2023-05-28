import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

import { 
    Error,
    Forgot, 
    ForgotHeader, 
    ForgotSpan, 
    ForgotSvg, 
    LoginForm,
    Success,
} from './styles';
import CicleIconBtn from '@/components/imputs/buttons/cicledIconBtn';
import LoginInput from '@/components/imputs/loginInput';

import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getCsrfToken, getProviders, getSession, signIn } from 'next-auth/react';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';

const initialValues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
    success: "",
    error: "",
};


export default function index() {
    const [ loading, setLoading ] = useState(false);
    const [ user, setUser ] = useState(initialValues);
    const [ email, setEmail] = useState('');
    const [ success, setSuccess ] = useState('');
    const [ error, setError ] = useState('');


    const emailValidation = Yup.object().shape({
        email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
    });


    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });
    return (
        <>
            <Header country={country}/>
            <Forgot>
                <div>
                    {""}
                    <ForgotHeader>
                        <ForgotSvg>
                            <BiLeftArrowAlt />
                        </ForgotSvg>
                        <ForgotSpan>Forgot your password?
                            <Link href="/">Login instead</Link>
                        </ForgotSpan>
                    </ForgotHeader>
                    <LoginForm>
                        
                        <Formik
                            enableReinitialize
                            emailValues={{
                                email,
                            }}
                            validationSchema={emailValidation}
                            onSubmit={(() => {
                                ForgotHeader();
                            })}
                        
                        >
                        {
                            (form) => (
                                <Form method='post' action="/api/auth/signin/email" >                            
                                    <input 
                                        type="hidden" 
                                        name="csrfToken" 
                                    />
                                    <LoginInput 
                                        type="email"
                                        name="email"
                                        icon="email"
                                        placeholder="Email address"
                                        onChange={(e)=> setEmail(e.target.value)}
                                    />
                                    <CicleIconBtn 
                                        type="submit"
                                        text="Sign In"
                                        />
                                </Form>
                            )
                        }  
                        </Formik>
                        <span>
                            {error && (<Error>{error}</Error>)}
                            {success && (<Success>{success}</Success>)}
                        </span>
                        
                    </LoginForm>
                </div>
            </Forgot>
            <Footer country={country} />
        </>
    );
}

