// Tổng hợp lại router

import { DefaultLayoutHeader } from '~/components/Layout';

import Homepage from '~/components/pages/Home';
import FollowingPage from '~/components/pages/Following';
import Profilepage from '~/components/pages/Profile';
import UploadPage from '~/components/pages/Upload';

// 1.Pages not login
const publicRoutes = [
    { path: '/', component: Homepage },
    { path: '/following', component: FollowingPage },
    { path: '/@:nickname', component: Profilepage },
    { path: '/upload', component: UploadPage, layout: DefaultLayoutHeader },
];

// 2.Pages need login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
