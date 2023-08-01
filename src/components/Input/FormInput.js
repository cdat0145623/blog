import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, classnamelabel, htmlFor, className, errorMessage, onChange, ...inputProps } = props;
    const classLabel = cx({ [classnamelabel]: classnamelabel });
    const classInput = cx({ [className]: className });

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <>
            <label className={classLabel} htmlFor={htmlFor}>
                {label}
            </label>
            <input
                {...inputProps}
                className={classInput}
                onChange={onChange}
                focused={focused.toString()}
                onBlur={handleFocus}
            />
            <span className={cx('error-message')}>{errorMessage}</span>
        </>
    );
};

export default FormInput;
