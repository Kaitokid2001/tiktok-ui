import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';
import { FollowingIcon, HomeIcon, LiveIcon } from '~/components/Icons/sidebarIcon';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={routesConfig.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={routesConfig.following} icon={<FollowingIcon />} />
                <MenuItem title="Live" to={routesConfig.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested account" />
            <SuggestedAccounts label="Following account" />
        </aside>
    );
}

export default Sidebar;
