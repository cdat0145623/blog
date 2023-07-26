import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <span className={cx('title')}>Login</span>
            <form className={cx('form')}>
                <label className={cx('form-label')} htmlFor="loginEmail">
                    Email
                </label>
                <input className={cx('form-input')} type="email" placeholder="cdat789@gmail.com" id="loginEmail" />
                <label className={cx('form-label')} htmlFor="loginPassword">
                    Password
                </label>
                <input className={cx('form-input')} type="password" placeholder="******" id="loginPassword" />
                <button className={cx('btn-login')}>Login</button>
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
