import classNames from 'classnames/bind';
import styles from './Label.module.scss';

const cx = classNames.bind(styles);

function Label({ nameLabel, className, ...labelProps }) {
    const classes = cx({ [className]: className });
    return (
        <label className={classes} {...labelProps}>
            {nameLabel}
        </label>
    );
}

export default Label;
