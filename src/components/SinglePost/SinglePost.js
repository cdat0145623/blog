import classNames from 'classnames/bind';
import styles from './SinglePost.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SinglePost() {
    return (
        <div className={cx('single-post')}>
            <div className={cx('wrapper')}>
                <img className={cx('image')} src="https://wallpaperset.com/w/full/c/5/6/120869.jpg" alt="" />
                <h1 className={cx('title')}>
                    Lorem Ipsum has been the industry's standard dummy text
                    <div className={cx('edit')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
                        <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} />
                    </div>
                </h1>
                <div className={cx('info')}>
                    <span className={cx('author')}>
                        Author: <b>Safak</b>
                    </span>
                    <span className={cx('date')}>1 hour ago</span>
                </div>
                <p className={cx('description')}>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like). It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
