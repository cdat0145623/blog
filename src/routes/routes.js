import config from '~/config/index';

import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Write from '~/pages/Write/Write';
import Settings from '~/pages/Settings/Settings';
import Post from '~/pages/Single/Single';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register },
    { path: config.routes.login, component: Login },
    { path: config.routes.write, component: Write },
    { path: config.routes.setting, component: Settings },
    { path: config.routes.post, component: Post },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
