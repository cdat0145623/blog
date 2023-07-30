import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            });
            console.log(res);
            res.data && window.location.replace('/login');
        } catch (error) {
            setError(true);
        }
    };
    return (
        <div className={cx('register')}>
            <span className={cx('title')}>Register</span>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <label className={cx('form-label')} htmlFor="registerUsername">
                    Username
                </label>
                <input
                    className={cx('form-input')}
                    type="text"
                    placeholder="Enter your username..."
                    id="registerUsername"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className={cx('form-label')} htmlFor="registerEmail">
                    Email
                </label>
                <input
                    className={cx('form-input')}
                    type="email"
                    placeholder="cda@gmail.com"
                    id="registerEmail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className={cx('form-label')} htmlFor="registerPassword">
                    Password
                </label>
                <input
                    className={cx('form-input')}
                    type="password"
                    placeholder="******"
                    id="registerPassword"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={cx('btn-register')} type="submit">
                    Register
                </button>
            </form>
            {/* <button className={cx('btn-login')}>
                <Link className={cx('link')} to={config.routes.login}>
                    Login
                </Link>
            </button> */}
            {error && <p className={cx('error-message')}>Some thing went wrong</p>}
        </div>
    );
}

export default Register;
