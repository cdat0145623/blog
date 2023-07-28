import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/components/Header/Header';
import Posts from '~/components/Posts/Posts';
import Sidebar from '~/components/Sidebar/Sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className={cx('home')}>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
