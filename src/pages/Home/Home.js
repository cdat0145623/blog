import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/components/Header/Header';
import Posts from '~/components/Posts/Posts';
import Sidebar from '~/components/Sidebar/Sidebar';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <div className={cx('home')}>
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
