import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('register')}>
            <span className={cx('title')}>Register</span>
            <form className={cx('form')}>
                <label className={cx('form-label')} htmlFor="registerUsername">
                    Username
                </label>
                <input
                    className={cx('form-input')}
                    type="text"
                    placeholder="Enter your username..."
                    id="registerUsername"
                />
                <label className={cx('form-label')} htmlFor="registerEmail">
                    Email
                </label>
                <input className={cx('form-input')} type="email" placeholder="cda@gmail.com" id="registerEmail" />
                <label className={cx('form-label')} htmlFor="registerPassword">
                    Password
                </label>
                <input className={cx('form-input')} type="password" placeholder="******" id="registerPassword" />
                <button className={cx('btn-register')}>Register</button>
            </form>
            <button className={cx('btn-login')}>
                <Link className={cx('link')} to={config.routes.login}>
                    Login
                </Link>
            </button>
        </div>
    );
}

export default Register;
