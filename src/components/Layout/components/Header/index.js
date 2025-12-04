import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Header classNames={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </Header>
    );
}

export default Header;
