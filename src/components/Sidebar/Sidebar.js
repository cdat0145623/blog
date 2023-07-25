import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquarePinterest,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>ABOUT ME</span>
                <img
                    className={cx('sidebar-image')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zau5NvdA9WpLkaErsJ94gzdicccNkYeeIdb_67xpHStHGFbpKq5v5O1X8Fhcwqb00eg&usqp=CAU"
                    alt=""
                />
                <p className={cx('sidebar-text')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </p>
            </div>
            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>CATEGORIES</span>
                <ul className={cx('sidebar-list')}>
                    <li className={cx('sidebar-list-item')}>Life</li>
                    <li className={cx('sidebar-list-item')}>Music</li>
                    <li className={cx('sidebar-list-item')}>Style</li>
                    <li className={cx('sidebar-list-item')}>Sport</li>
                    <li className={cx('sidebar-list-item')}>Tech</li>
                    <li className={cx('sidebar-list-item')}>Cinema</li>
                </ul>
            </div>

            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>FOLLOW US</span>
                <div className={cx('sidebar-social')}>
                    <FontAwesomeIcon className={cx('sidebar-icon')} icon={faSquareFacebook} />
                    <FontAwesomeIcon className={cx('sidebar-icon')} icon={faSquareTwitter} />
                    <FontAwesomeIcon className={cx('sidebar-icon')} icon={faSquarePinterest} />
                    <FontAwesomeIcon className={cx('sidebar-icon')} icon={faSquareInstagram} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
