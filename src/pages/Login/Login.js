import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import axios from 'axios';
import { useContext, useRef } from 'react';
import { Context } from '~/context/Context';

const cx = classNames.bind(styles);

function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/auth/login', {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILED' });
        }
    };

    return (
        <div className={cx('login')}>
            <span className={cx('title')}>Login</span>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <label className={cx('form-label')} htmlFor="loginUsername">
                    Username
                </label>
                <input
                    className={cx('form-input')}
                    type="text"
                    placeholder="Enter your username..."
                    id="loginUsername"
                    ref={usernameRef}
                />
                <label className={cx('form-label')} htmlFor="loginPassword">
                    Password
                </label>
                <input
                    ref={passwordRef}
                    className={cx('form-input')}
                    type="password"
                    placeholder="******"
                    id="loginPassword"
                />
                <button className={cx('btn-login')} type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className={cx('btn-register')}>
                <Link className={cx('link')} to={config.routes.register}>
                    Register
                </Link>
            </button>
        </div>
    );
}

export default Login;
