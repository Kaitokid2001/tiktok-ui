import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/eb88f4d0277db3f867d7ca372d4f5a72~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=98b8569c&x-expires=1765062000&x-signature=1euCVRd81KEKO7g0UEoa1C9o1PE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my3"
                alt="No img"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
