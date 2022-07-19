import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard/monitoring" replace />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/monitoring" replace />, index: true },
        { path: 'monitoring', element: <Monitoring /> },
        { path: 'statistics', element: <Statistics /> },
        { path: 'charging', element: <Charging /> },
        {
          path: 'chat',
          children: [
            { element: <Chat />, index: true },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> },
          ],
        },
        { path: 'users', element: <Users /> },
        { path: 'owners', element: <Owners /> },
        { path: 'settingsService', element: <SettingsService /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/newUser" replace />, index: true },
            { path: 'newUser', element: <NewUser /> },
            { path: 'profileUser', element: <ProfileUser /> },
          ],
        },
        {
          path: 'owner',
          children: [
            { element: <Navigate to="/dashboard/owner/newOwner" replace />, index: true },
            { path: 'newOwner', element: <NewOwner /> },
            { path: 'profileOwner', element: <ProfileOwner /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const Monitoring = Loadable(lazy(() => import('../pages/Monitoring')));
const Statistics = Loadable(lazy(() => import('../pages/Statistics')));
const Charging = Loadable(lazy(() => import('../pages/Charging')));
const Chat = Loadable(lazy(() => import('../pages/Chat')));
const Users = Loadable(lazy(() => import('../pages/Users')));
const NewUser = Loadable(lazy(() => import('../pages/NewUser')));
const ProfileUser = Loadable(lazy(() => import('../pages/ProfileUser')));
const Owners = Loadable(lazy(() => import('../pages/Owners')));
const ProfileOwner = Loadable(lazy(() => import('../pages/ProfileOwner')));
const NewOwner = Loadable(lazy(() => import('../pages/NewOwner')));
const SettingsService = Loadable(lazy(() => import('../pages/SettingsService')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
