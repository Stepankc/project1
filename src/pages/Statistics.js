import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container, Typography, Divider } from '@mui/material';

// hooks
import useSettings from '../hooks/useSettings';
// _mock_
import { _userList } from '../_mock';
// components
import Page from '../components/Page';
// sections
import CheckStats from '../sections/statistics/CheckStats';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  return (
    <Page title="Мониторинг">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Мониторинг
        </Typography>
        <Divider sx={{ bgcolor: 'black', mb: 2 }} />
        <Typography variant="h5" component="h3" paragraph>
          Для просмотра статистики, выберите нужные фильтры
        </Typography>
        <CheckStats isEdit={isEdit} />
        <Divider sx={{ bgcolor: 'black', mb: 2,mt: 2 }} />
      </Container>
    </Page>
  );
}
