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

// TODO: Refatorar esse código para que ele fique mais limpo e legível
// TODO 2: Refatorar para que usuário possa ativar a conta por email
// TODO 3: Inserir comentários explicando o código

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
    // validate jwt token
    const { query } = context;
    const token = query.token;
    console.log("token",token);

    const payload = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
    console.log(payload);
    try {
        //const user_id = payload.sub;
        return {
            props: {
                user_id: user_id.sub,
                payload: payload
            }
        };
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return {
                props: {
                    message: 'Token expired'
                }
            };
        } else {
            return {
                props: {
                    message: 'Token is not valid'
                }
            };
        }
    }
}
