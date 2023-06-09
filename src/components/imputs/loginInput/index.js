import { BiUser } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import {
    LoginInputContainer,
} from './styles';
import styles from './page.module.scss';
import { IoKeyOutline } from 'react-icons/io5';
import { ErrorMessage, useField, Field } from "formik";


export default function index({ icon, placeholder, ...props }) {
    const [field, meta] = useField(props);
    return (
            <LoginInputContainer 
            className={`${meta.touched && meta.error ? styles.error : ""}`}>
                {
                icon == "user" ? <BiUser /> : 
                icon == "email" ? <SiMinutemailer /> : 
                icon == "password" ? <IoKeyOutline /> 
                : ""
                }
                <Field
                    type={field.type}
                    name={field.name}
                    placeholder={placeholder}
                    {...field}
                    {...props}
                />
                {meta.touched && meta.error ? (
                    <div className={styles.error_popup}>
                        <span></span>
                        <ErrorMessage name={field.name} className={styles.error} />
                    </div>
                ): null}
                
            </LoginInputContainer>
    );
}