import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';

import { 
    LoginContainer, 
    LoginHeader, 
    LoginMain, 
    LoginSvg,
    LoginSpan,

    LoginForm,
    LoginTitle,

    ForgotPassword,
    LoginSocials,
    LoginSocialOr,
    LoginSocialBtns,
    LoginSocialBtn,
    LoginSocialWrap,
    LoginSocialImg,
    TopCol,

    Succcess,
    Error,
} from './styles';

import LoginInput from '@/components/imputs/loginInput';
import CicleIconBtn from '@/components/imputs/buttons/cicledIconBtn';

import DotLoader from '@/components/loaders/dotloader';

import { BiLeftArrowAlt } from 'react-icons/bi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { getCsrfToken, getProviders, getSession, signIn } from 'next-auth/react';

const initialValues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
    success: "",
    error: "",
    login_success: "",
    login_error: "",
};


const metadata = {
    title: "Online Shopping for Popular Electronics, Fashion, Home & Garden, Toys & Sports, Automobiles and More products for Affordable Prices.",
};

export default function index({ providers, callbackUrl, csrfToken }) {
    const [ loading, setLoading ] = useState(false);
    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });
    
    const [ user, setUser ] = useState(initialValues);
    const { 
        login_email, 
        login_password,
        name,
        email,
        password,
        conf_password,
        success,
        error,
        login_success,
        login_error,
    } = user;

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

    const registerValidation = Yup.object().shape({
        name: Yup.string("What's your name")
                        .required("Full name is required.")
                        .min(3, "Full name must be at least 3 characters long.")
                        .max(50, "Full name must be at most 50 characters long.")
                        .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, "Full name must contain only letters."),
        email: Yup.string()
                    .required("Email address is required.")
                    .email("Please enter a valid email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters long.").required("Password is required."),
        conf_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm password is required."),
    });

    const signUpHandler = async () => {
        setLoading(true);
        const data = {
            name,
            email,
            password,
            conf_password,
        };
        try {
            const response = await axios.post("/api/auth/signup", data);
            setUser({ ...user, login_success: response.data.message });
            setLoading(false);
            let option = {
                redirect: false,
                email: email,
                password: password,
            };
            
            setTimeout( async () => {
                await signIn("credentials", option);
                Router.push(callbackUrl || "/");
            }, 200);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setUser({ ...user, success:"", error: error.response.data.message });
            setTimeout(() => {
                setUser({ ...user, success:"", error: "" });
            }, 2000);
        }
        setLoading(false);
    };
    
    const signInHandler = async () => {
        setLoading(true);
        let option = {
            redirect: false,
            email: login_email,
            password: login_password,
        };
        const res = await signIn("credentials", option);
        setUser({ ...user, login_success: "", login_error: "" });
        setLoading(false);
        if (res?.error) {
            setLoading(false);
            setUser({ ...user, login_success: "", login_error: res?.error });
            setTimeout(() => {
                setUser({ ...user, login_success: "", login_error: "" });
            }, 2000);
        } else{
            setLoading(false);
            setUser({ ...user, login_error: "", success: "Login successfull!" });
            setTimeout(() => {
                Router.push(callbackUrl || "/");
            }, 500);
        }
    };


    return (
        <>
        {loading && <DotLoader loading={loading} />}
        <Header country={country} />
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
                        onSubmit={(() => {
                            signInHandler();
                        })}
                    
                    >
                    {
                        (form) => (
                            <Form method='post' action="/api/auth/signin/email" >                            
                                <input 
                                    type="hidden" 
                                    name="csrfToken" 
                                    defaultValue={csrfToken} 
                                />
                                <LoginInput 
                                    type="email"
                                    name="login_email"
                                    icon="email"
                                    placeholder="Email or Username"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="password"
                                    name="login_password"
                                    icon="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <CicleIconBtn 
                                    type="submit"
                                    text="Sign In"
                                    />
                                <ForgotPassword>
                                    <Link href="/auth/forgot">Forgot Password?</Link>
                                </ForgotPassword>
                            </Form>
                        )
                    }  
                    </Formik>
                    <span>
                        {login_error && (<Error>{login_error}</Error>)}
                        {login_success && (<Success>{login_success}</Success>)}
                    </span>
                    <LoginSocials>
                        <LoginSocialOr>Or continue with</LoginSocialOr>
                        <LoginSocialWrap>
                        {
                            Object.values(providers).map((provider) => (
                                provider.name !== "Credentials" && (
                                <LoginSocialBtns key={provider.name}>
                                    <LoginSocialBtn
                                        onClick={() => signIn(provider.id)}
                                        style={{ backgroundColor: provider.color }}
                                    >
                                        <LoginSocialImg src={`../../icons/${provider.name}.png`} alt={provider.name} />
                                        Sign with {provider.name}
                                    </LoginSocialBtn>
                                </LoginSocialBtns>)
                            ))
                        }
                        </LoginSocialWrap>
                    </LoginSocials>
                    
                </LoginForm>
            </LoginContainer>


            <LoginContainer>
                <LoginForm>
                    <TopCol></TopCol>
                    <LoginTitle>Sign up</LoginTitle>
                    <p>
                        Get access to one of the best online store.
                    </p>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            name,
                            email,
                            password,
                            conf_password,
                        }}
                        validationSchema={registerValidation}
                        onSubmit={() => {
                            signUpHandler()
                        }}
                    
                    >
                    {
                        (form) => (
                            <Form> 
                                <LoginInput 
                                    type="text"
                                    name="name"
                                    icon="user"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                />                            
                                <LoginInput 
                                    type="email"
                                    name="email"
                                    icon="email"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="Password"
                                    name="password"
                                    icon="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="Password"
                                    name="conf_password"
                                    icon="password"
                                    placeholder="Re-type Password"
                                    onChange={handleChange}
                                />
                                <CicleIconBtn 
                                    type="submit"
                                    text="Sign up"
                                    />
                                
                            </Form>
                        )
                    }  
                    </Formik>
                    <div> { success && <Succcess>{success}</Succcess> } </div>
                    <div> { error && <Error>{error}</Error> } </div>
                </LoginForm>
            </LoginContainer>
        </LoginMain>
        <Footer country={country} />
        </>
    );
}

export async function getServerSideProps(context) {
    const { req, query } = context;
    const session = await getSession({ req });
    if (session) {
        return {
            redirect: {
                destination: callbackUrl || "/",
            },
        };
    }
    const csrfToken = await getCsrfToken(context);
    const {callbackUrl} = query;
    const providers = Object.values( await getProviders());

    return {
        props: { providers, csrfToken, callbackUrl },
    };
}
