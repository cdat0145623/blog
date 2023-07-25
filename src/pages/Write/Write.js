import classNames from 'classnames/bind';
import styles from './Write.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Write() {
    return (
        <div className={cx('write')}>
            <img className={cx('image')} src="https://wallpaperset.com/w/full/8/f/1/120875.jpg" alt="" />
            <form className={cx('form')}>
                <div className={cx('group')}>
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className={cx('write-input')} autoFocus={true} />
                </div>

                <div className={cx('group')}>
                    <textarea
                        className={cx('write-input', 'write-text')}
                        type="text"
                        placeholder="Tell your story..."
                    ></textarea>
                </div>

                <button className={cx('btn-submit')}>Publish</button>
            </form>
        </div>
    );
}

export default Write;
