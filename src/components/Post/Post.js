import classNames from 'classnames/bind';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('post')}>
            <img className={cx('post-img')} src="https://wallpaperset.com/w/full/1/e/6/120854.jpg" alt="" />
            <div className={cx('post-info')}>
                <div className={cx('post-cats')}>
                    <span className={cx('post-cat')}>Music</span>
                    <span className={cx('post-cat')}>Life</span>
                </div>
                <span className={cx('post-title')}>Contrary to popular belief</span>
                <hr />
                <span className={cx('post-date')}>1 hour ago</span>
                <p className={cx('post-description')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
}

export default Post;
