import classNames from 'classnames/bind';
import styles from './Posts.module.scss';
import Post from '../Post/Post';

const cx = classNames.bind(styles);

function Posts({ posts }) {
    return (
        <div className={cx('posts')}>
            {posts.map((p, index) => (
                <Post post={p} key={index} />
            ))}
        </div>
    );
}

export default Posts;
