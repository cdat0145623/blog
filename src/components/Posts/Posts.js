import classNames from 'classnames/bind';
import styles from './Posts.module.scss';
import Post from '../Post/Post';

const cx = classNames.bind(styles);

function Posts() {
    return (
        <div className={cx('posts')}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
