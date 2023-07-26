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

const cx = classNames.bind(styles);

function Topbar() {
    const user = false;
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
                    <li className={cx('topBar-item')}>
                        <Link className={cx('link')} to={config.routes.home}>
                            {user && 'LOGOUT'}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={cx('topBar-right')}>
                {user ? (
                    <img
                        className={cx('topBar-img')}
                        src="https://lh3.googleusercontent.com/fife/AKsag4OQF_HbD2HMD_g85QGHNqB-qSMHivHl9QbYKQN52g7ZUTbqQqRQ_I_g1KS3TKeZVLvMe83sxQJZ3N9ZYrucI81NC7rogE4hwmFteo7T8YVPNXZOwmXD5JNmlVWwcA8uFfbGFx-yoQKxF65tXE-olcrRloB0YI3Rbm66UOMUx38t7b92QzQZ81rmq4_FcOSyRYrDPApfPOgu_oAAjYP-pn3JeNSGoLr_0xPpKJWXXO3dgsE6p6OGX_DbupvhE8ftzjPybIceIOMAhPblJOVZbnqbe9R4J-BercPS-x1koA0-B2O3UiLalOgPnw31JqTPKOVCuvS_HDkLmkzS_gvxPD5E5ss8NHQ2qlcRQ-JB4Kcp-ht5kUssGlq7EoMg0mxQ7x50ApYLEC3fAsftO5mZRUIgTtnjRrFWGMiNgQD9-5s6J0ZLT-7MdPUHaG-otPdgOHTGRUcRkyOmaOEtWuk7LFD3HnsWV9Wi0_tjGyYySQ8YloZJoVcOASPc8wWIZBdH9KtISF9mCsUWKsTDHHsJUth31VWCimF9KPSfDCm57TWKFBSIrE2vPUdCBPsVx1g95eHhDLz4qse16HAifLe7V_ev3G-XW22k4QSkz_ug639khTw-pPyiaiPpCHHy1ZPy6ghkYglVDXqgOY1VuTHs0Yi4IQWlzKffZAeDpz9ctnyRNV0MMst06-YdWgvROFrUqbzh744-S3jsLxGBkltbdJlTTaqW_Ctho4M9F8SAJCPnlMAPQeK028nCCoiP6jj5whPY1zKpYm4OGQc8U7zOK20dPUQ4NSOoeQeNQHs2S2cB6JY2i97s05jfaCGuGaVvf2VHbxUTUAf7_9mKLvIrj-7Z0tbNTZ_GcQ4FlAvg2DOOtku1et1adKJHKVQUXCTeoJU8TEBtOYTsDv8IU3uhdcgDpwyW3UjYiCxk0uZq_Pd4JWpn51CQQLx6lmKulTFF0QAUvpIBK1wSLT5a2ZXvRdTqaAxm7tZ-GH6NmsLaDnBgdfzHWeB8XwPGs_uX-D2QW0GilZz_i-5UV8Smj5XZZgl6uJthe5plyZELY7puHNpm53bHh2fQREOvxWsEjVHceFl-CQZBFC2Ne1PqOXZ-XvLzXuxzxFqxTCwUd7vOSRls0oIXsJIBKnFpj7AJog7_9UaES81qQs0Ith3bllLdzntzWk5VkkaGvWBZY0IkqFv765zqLmlY4KQKbJQxAkb5U_UnlD9H5kvVp36KbqnJTqpCK7ZS2UflPBZdSGC7sKA5lHE3AmN6yzzwga6YXcIwdZYe_sR7NOd7yxaa1_pyI5pIrwS1eApTV7W0mOJcKLydBqhRjIWaFJk=s64-c"
                        alt=""
                    />
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
