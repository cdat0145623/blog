import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-title')}>
                <span className={cx('header-title-small')}>React & Node</span>
                <span className={cx('header-title-large')}>Blog</span>
            </div>
            <img className={cx('header-image')} src="https://wallpaperset.com/w/full/3/0/f/120853.jpg" alt="" />
        </div>
    );
}

export default Header;
