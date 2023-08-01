import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ToastMessage({ type, message }) {
    console.log(1);
    console.log(type, message);
    return (
        <div className={cx('toast', 'toast-frame', `${type}`)}>
            <div className={cx('toast-icon')}>
                <FontAwesomeIcon icon={type === 'toast-success' ? faCircleCheck : faCircleXmark} />
            </div>

            <div className={cx('toast-body')}>
                <p className={cx('toast-msg')}>{message}</p>
            </div>
        </div>
    );
}

export default ToastMessage;
