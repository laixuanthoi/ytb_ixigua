export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    component: './Dashboard',
  },
  {
    name: 'Youtube Manager',
    icon: 'table',
    path: '/youtube-manager',
    component: './YoutubeManager',
  },
  {
    name: 'Ixigua Manager',
    icon: 'table',
    path: '/ixigua-manager',
    component: './YoutubeManager',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
