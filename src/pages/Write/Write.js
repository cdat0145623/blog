import classNames from 'classnames/bind';
import styles from './Write.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { Context } from '~/context/Context';
import axios from 'axios';

const cx = classNames.bind(styles);

function Write() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.user.username,
            title,
            description,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + '.jpeg';
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {}
        }
        try {
            const res = await axios.post('/posts', newPost);
            console.log(res.data);
            window.location.replace('/post/' + res.data._id);
        } catch (error) {}
    };

    return (
        <div className={cx('write')}>
            {file && <img className={cx('image')} src={URL.createObjectURL(file)} alt="" />}
            <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('group')}>
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className={cx('write-input')}
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={cx('group')}>
                    <textarea
                        className={cx('write-input', 'write-text')}
                        type="text"
                        placeholder="Tell your story..."
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <button className={cx('btn-submit')} type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}

export default Write;
