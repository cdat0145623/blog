import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import Sidebar from '~/components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState } from 'react';
import { Context } from '~/context/Context';
import axios from 'axios';

const cx = classNames.bind(styles);

function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);
    const publicFolder = 'http://localhost:3001/images/';

    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_START' });
        const userUpdated = {
            userId: user.user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + '.jpeg';
            data.append('name', filename);
            data.append('file', file);
            userUpdated.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {}
        }
        try {
            const res = await axios.put(`/users/${user.user._id}`, userUpdated);
            setSuccess(true);
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
        } catch (error) {
            dispatch({ type: 'UPDATE_FAILURE' });
        }
    };
    return (
        <div className={cx('settings')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span className={cx('title-update')}>Update your account</span>
                    <span className={cx('title-delete')}>Delete your account</span>
                </div>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <label className={cx('form-title')}>Profile Picture</label>
                    <div className={cx('body')}>
                        <img
                            className={cx('image')}
                            src={file ? URL.createObjectURL(file) : publicFolder + user.user.profilePic}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <label className={cx('form-title')} htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        className={cx('form-input')}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className={cx('form-title')} htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="safak@gmail.com"
                        id="email"
                        className={cx('form-input')}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={cx('form-title')} htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className={cx('form-input')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('btn-update')} type="submit">
                        Update
                    </button>
                    {success && <span className={cx('success-message')}>Profile has been updated...</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;
