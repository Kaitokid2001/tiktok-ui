import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccount.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '../Poper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f0e998dc4a779544b30bbc96630be2e0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a1ed0ed1&x-expires=1765346400&x-signature=RWB3J6IL8oockJLqgNTVJZojb%2Fc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt="No img"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>huynhanhkiet</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Huỳnh Anh Kiệt</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
