import classNames from 'classnames/bind';
import styles from './SinglePost.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '~/context/Context';

const cx = classNames.bind(styles);

function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const publicFolder = 'http://localhost:3001/images/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete('/posts/' + path, {
                data: { username: user.user.username },
            });
            window.location.replace('/');
        } catch (error) {}
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.user.username,
                title,
                description,
            });
            setUpdateMode(false);
        } catch (error) {}
    };
    return (
        <div className={cx('single-post')}>
            <div className={cx('wrapper')}>
                {post.photo && <img className={cx('image')} src={publicFolder + post.photo} alt="" />}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className={cx('title-input')}
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className={cx('title')}>
                        {title}
                        {post.username === user?.user.username && (
                            <div className={cx('edit')}>
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faPenToSquare}
                                    onClick={() => setUpdateMode(true)}
                                />
                                <FontAwesomeIcon className={cx('icon')} icon={faTrashCan} onClick={handleDelete} />
                            </div>
                        )}
                    </h1>
                )}
                <div className={cx('info')}>
                    <span className={cx('author')}>
                        Author:
                        <Link to={`/?user=${post.username}`} className={cx('link')}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className={cx('date')}>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className={cx('description-input')}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p className={cx('description')}>{description}</p>
                )}
                {updateMode && (
                    <button className={cx('btn-update')} onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}

export default SinglePost;
