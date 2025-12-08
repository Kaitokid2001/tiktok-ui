import routesConfig from '~/config/routes';

// Tổng hợp lại router
import { DefaultLayoutHeader } from '~/Layout';
//Page
import Homepage from '~/components/pages/Home';
import FollowingPage from '~/components/pages/Following';
import ProFilePage from '~/components/pages/Profile';
import UploadPage from '~/components/pages/Upload';
import ReSearch from '~/Layout/components/ReSearch';
import Live from '~/components/pages/Live';
// 1.Pages not login
const publicRoutes = [
    { path: routesConfig.home, component: Homepage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.profile, component: ProFilePage },
    { path: routesConfig.upload, component: UploadPage, layout: DefaultLayoutHeader },
    { path: routesConfig.ReSearch, component: ReSearch, layout: null },
];

// 2.Pages need login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
