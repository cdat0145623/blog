import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquarePinterest,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Context } from '~/context/Context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Topbar() {
    const { user, dispatch } = useContext(Context);
    const publicFolder = 'http://localhost:3001/images/';

    console.log(user);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };
    return (
        <div className={cx('topBar')}>
            <div className={cx('topBar-left')}>
                <FontAwesomeIcon className={cx('topBar-icon')} icon={faSquareFacebook} />
                <FontAwesomeIcon className={cx('topBar-icon')} icon={faSquareTwitter} />
                <FontAwesomeIcon className={cx('topBar-icon')} icon={faSquarePinterest} />
                <FontAwesomeIcon className={cx('topBar-icon')} icon={faSquareInstagram} />
            </div>

            <div className={cx('topBar-center')}>
                <ul className={cx('topBar-list')}>
                    <li className={cx('topBar-item')}>
                        <Link className={cx('link')} to={config.routes.home}>
                            HOME
                        </Link>
                    </li>
                    <li className={cx('topBar-item')}>
                        <Link className={cx('link')} to={config.routes.home}>
                            ABOUT
                        </Link>
                    </li>
                    <li className={cx('topBar-item')}>
                        <Link className={cx('link')} to={config.routes.home}>
                            CONTACT
                        </Link>
                    </li>
                    <li className={cx('topBar-item')}>
                        <Link className={cx('link')} to={config.routes.write}>
                            WRITE
                        </Link>
                    </li>
                    <li className={cx('topBar-item')} onClick={handleLogout}>
                        <Link className={cx('link')} to={config.routes.login}>
                            {user && 'LOGOUT'}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={cx('topBar-right')}>
                {user ? (
                    <Link to={config.routes.setting}>
                        <img className={cx('topBar-img')} src={publicFolder + user.user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className={cx('topBar-list')}>
                        <li className={cx('topBar-item')}>
                            <Link className={cx('link')} to={config.routes.login}>
                                LOGIN
                            </Link>
                        </li>
                        <li className={cx('topBar-item')}>
                            <Link className={cx('link')} to={config.routes.register}>
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <FontAwesomeIcon className={cx('topBar-search-icon')} icon={faSearch} />
            </div>
        </div>
    );
}

export default Topbar;
