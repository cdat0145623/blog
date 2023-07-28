import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Post({ post }) {
    const publicFolder = 'http://localhost:3001/images/';
    return (
        <div className={cx('post')}>
            {post.photo && <img className={cx('post-img')} src={publicFolder + post.photo} alt="" />}
            <div className={cx('post-info')}>
                <div className={cx('post-cats')}>
                    {post.categories.map((c, index) => (
                        <span className={cx('post-cat')} key={index}>
                            {c.name}
                        </span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className={cx('link')}>
                    <span className={cx('post-title')}>{post.title}</span>
                </Link>
                <hr />
                <span className={cx('post-date')}>{new Date(post.createdAt).toDateString()}</span>
                <p className={cx('post-description')}>{post.description}</p>
            </div>
        </div>
    );
}

export default Post;
