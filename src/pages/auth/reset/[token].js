import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

import { 
    Error,
    Success,
    Forgot,
    ForgotContainer,
    ForgotHeader, 
    ForgotSpan, 
    ForgotSvg, 
    LoginForm,
} from './styles';
import CicleIconBtn from '@/components/imputs/buttons/cicledIconBtn';
import LoginInput from '@/components/imputs/loginInput';
import DotLoader from '@/components/loaders/dotloader';

import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { signIn } from 'next-auth/react';



export default function index({ user_id }) {
    const [ password, setPassword] = useState('');
    const [ confPassword, setConfPassword] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const passwordValidation = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });

    const resetHandler = async () => {
        try{
            setLoading(true);
            const { data } = await axios.put('/api/auth/reset', { 
                user_id,
                password,
            });
            let options = {
                redirect: false,
                email: data.email,
                password: password,
            };
            await signIn('credentials', options);
            setLoading(false);
            setSuccess('Password changed successfully!');
            setTimeout(() => {
                setSuccess('');
                window.location.reload(true);
                window.location.href = '/';
            }   , 1000);
        } catch (error) {
            setError(error.response.data.message);
            //setTimeout(() => {
              //  setError("");
            //}, 3000);
            setLoading(false);
            setSuccess('');
        }
    };
    return (
        <>
            {loading && <DotLoader loading={loading} />}
            <Header country={country}/>
            <Forgot>
                <ForgotContainer>
                    <ForgotHeader>
                        <ForgotSvg>
                            <BiLeftArrowAlt />
                        </ForgotSvg>
                        <ForgotSpan>Reset your password!
                            <Link href="/signin"> Login instead</Link>
                        </ForgotSpan>
                    </ForgotHeader>
                    <LoginForm>
                        
                        <Formik
                            enableReinitialize
                            initialValues={{
                                password,
                                confPassword,
                            }}
                            validationSchema={passwordValidation}
                            
                            onSubmit={(() => {
                                resetHandler();
                            })}
                        
                        >
                        {
                            (form) => (
                                <Form >
                                    <LoginInput 
                                        type="Password"
                                        name="password"
                                        icon="password"
                                        placeholder="Password"
                                        onChange={(e)=> {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <LoginInput 
                                        type="Password"
                                        name="confPassword"
                                        icon="password"
                                        placeholder="Repeat password"
                                        onChange={(e)=> {
                                            setConfPassword(e.target.value);
                                        }}
                                    />
                                    <CicleIconBtn 
                                        type="submit"
                                        text="New password"
                                        />
                                    <span style={{marginTop: "10px"}}>
                                    {error && (<Error>{error}</Error>)}
                                    {success && (<Success>{success}</Success>)}
                                    </span>
                                </Form>
                            )
                        }  
                        </Formik>
                        
                    </LoginForm>
                </ForgotContainer>
            </Forgot>
            <Footer country={country} />
        </>
    );
}

export async function getServerSideProps(context) {
    
    const { query } = context;
    const token = query.token;
    
    const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
    
    if(!user_id) {
        window.location.href = '/';
        return null;
    }
    
    return {
        props: {
            user_id: user_id.id,
        }
    }
}
