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
import axios from 'axios';


// TODO: Inserir comentarios explicando o codigo.

export default function index() {
    const [ email, setEmail] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const emailValidation = Yup.object().shape({
        email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
    });

    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });

    const forgotHandler = async () => {
        try{
            setLoading(true);
            const { data } = await axios.post('/api/auth/forgot', { email });
            console.log(data);            
            setError('');
            setSuccess(data.message);
            //setTimeout(() => {
            //    setSuccess("");
            //}, 3000);
                setLoading(false);
            setEmail('');
        } catch (error) {
            setError(error.response.data.message);
            //setTimeout(() => {
            //    setError("");
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
                        <ForgotSpan>Forgot your password?
                            <Link href="/signin">Login instead</Link>
                        </ForgotSpan>
                    </ForgotHeader>
                    <LoginForm>
                        
                        <Formik
                            enableReinitialize
                            initialValues={{
                                email,
                            }}
                            validationSchema={emailValidation}
                            
                            onSubmit={(() => {
                                forgotHandler();
                            })}
                        
                        >
                        {
                            (form) => (
                                <Form >
                                    <LoginInput 
                                        type="email"
                                        name="email"
                                        icon="email"
                                        placeholder="Email address"
                                        onChange={(e)=> {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <CicleIconBtn 
                                        type="submit"
                                        text="Send link"
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

