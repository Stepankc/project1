import { useEffect } from 'react';
// @mui
import { Card, Container } from '@mui/material';
// redux
import { useDispatch } from '../redux/store';
import { getConversations, getContacts } from '../redux/slices/chat';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { ChatSidebar, ChatWindow } from '../sections/chat';

// ----------------------------------------------------------------------

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="Чат">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  );
}
