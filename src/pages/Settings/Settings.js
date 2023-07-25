import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import Sidebar from '~/components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Settings() {
    return (
        <div className={cx('settings')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span className={cx('title-update')}>Update your account</span>
                    <span className={cx('title-delete')}>Delete your account</span>
                </div>
                <form className={cx('form')}>
                    <label className={cx('form-title')}>Profile Picture</label>
                    <div className={cx('body')}>
                        <img
                            className={cx('image')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ae2101aa041114d4fd5fa3cd44097eb7~c5_100x100.jpeg?x-expires=1690480800&x-signature=mU6U50Pe%2FW4vO6%2BUvN0Loj%2F7GeA%3D"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>

                    <label className={cx('form-title')} htmlFor="username">
                        Username
                    </label>
                    <input type="text" placeholder="Username" id="username" className={cx('form-input')} />
                    <label className={cx('form-title')} htmlFor="email">
                        Email
                    </label>
                    <input type="email" placeholder="safak@gmail.com" id="email" className={cx('form-input')} />
                    <label className={cx('form-title')} htmlFor="password">
                        Password
                    </label>
                    <input type="password" placeholder="Password" id="password" className={cx('form-input')} />
                    <button className={cx('btn-update')}>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;
