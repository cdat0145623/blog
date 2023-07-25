import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import Sidebar from '~/components/Sidebar/Sidebar';
import SinglePost from '~/components/SinglePost/SinglePost';

const cx = classNames.bind(styles);

function Single() {
    return (
        <div className={cx('single')}>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;
