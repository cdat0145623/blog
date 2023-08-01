import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useState } from 'react';
import axios from 'axios';
import FormInput from '~/components/Input/FormInput';
import ToastMessage from '~/components/ToastMessage/ToastMessage';

const cx = classNames.bind(styles);

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                username: values.username,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
            });
            setData(res.data);
            setTimeout(() => {
                setData(null);
                res.data && window.location.replace('/login');
            }, 2000);
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data);
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    };

    const inputs = [
        {
            id: 'registerUsername',
            className: 'form-input',
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage:
                "Username shoud be 3-16 characters, only start with letter and shouldn't include any special characters",
            label: 'Username',
            classnamelabel: 'form-label',
            htmlFor: 'registerUsername',
            pattern: '^[A-Za-z][A-Za-z0-9_]{2,16}$',
            required: true,
        },
        {
            id: 'registerEmail',
            className: 'form-input',
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address',
            label: 'Email',
            classnamelabel: 'form-label',
            htmlFor: 'registerEmail',
            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            required: true,
        },
        {
            id: 'registerPassword',
            className: 'form-input',
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password shout be 4-20 characters and include at least one letter and one number',
            label: 'Password',
            classnamelabel: 'form-label',
            htmlFor: 'registerPassword',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
            required: true,
        },
        {
            id: 'registerConfirmPassword',
            className: 'form-input',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Password don't match!",
            label: 'Confirm Password',
            classnamelabel: 'form-label',
            htmlFor: 'registerConfirmPassword',
            pattern: values.password,
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className={cx('register')}>
            {data && <ToastMessage type="toast-success" message="Register successfully!" />}
            {error && <ToastMessage type="toast-error" message={error} />}
            <form className={cx('form')} onSubmit={handleSubmit}>
                <span className={cx('title')}>Register</span>
                {inputs.map((input, index) => (
                    <FormInput key={index} {...input} onChange={onChange} value={values[input.name]} />
                ))}
                <button className={cx('btn-register')} type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
