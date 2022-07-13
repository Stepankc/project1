// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  statistics: getIcon('ic_analytics'),
  monitoring: getIcon('ic_dashboard'),
  chat: getIcon('ic_chat'),
  setting: getIcon('ic_settings'),
  charge: getIcon('ic_charge')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Основной',
    items: [
      { title: 'Мониторинг', path: '/dashboard/monitoring', icon: ICONS.monitoring },
      { title: 'Статистика', path: '/dashboard/statistics', icon: ICONS.statistics },
      { title: 'Зарядные станции', path: '/dashboard/charging', icon: ICONS.charge },
      { title: 'Чат', path: '/dashboard/chat', icon: ICONS.chat },
      { title: 'Пользователи', path: '/dashboard/users', icon: ICONS.user },
      { title: 'Владельцы станций', path: '/dashboard/owners', icon: ICONS.user },
      { title: 'Настройка сервиса', path: '/dashboard/settingsService', icon: ICONS.setting },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Управление',
    items: [
      {
        title: 'Пользователи',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          { title: 'Новый пользователь', path: '/dashboard/user/newUser' },
          { title: 'Профиль пользователя', path: '/dashboard/user/profileUser' },
        ],
      },
      {
        title: 'Владельцы станций',
        path: '/dashboard/owner',
        icon: ICONS.user,
        children: [
          { title: 'Профиль владельца', path: '/dashboard/owner/profileOwner' },
          { title: 'Новый владелец', path: '/dashboard/owner/newOwner' },
        ],
      },
    ],
  },
];

export default sidebarConfig;
