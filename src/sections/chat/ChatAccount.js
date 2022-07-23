import { useState } from 'react';
// @mui
import { Box, List, Stack, Divider, MenuItem, Typography } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MyAvatar from '../../components/MyAvatar';
import MenuPopover from '../../components/MenuPopover';
import BadgeStatus from '../../components/BadgeStatus';

// ----------------------------------------------------------------------

// const STATUS = ['online', 'invisible', 'away'];

export default function ChatAccount() {

  const [status] = useState('online');

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <MyAvatar onClick={handleOpen} sx={{ cursor: 'pointer', width: 48, height: 48 }} />
        <BadgeStatus status={status} sx={{ position: 'absolute', bottom: 2, right: 2 }} />
      </Box>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        arrow="left-top"
        sx={{ p: 0, ml: 0.5, width: 'auto' }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 1, pl: 2.5 }}>
          <div>
            <Typography noWrap variant="subtitle1">
            Rayan Moran
            </Typography>
            <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
            rayan.moran@gmail.com
            </Typography>
          </div>
        </Stack>

        <Divider />

        <List
          sx={{
            px: 1,
            '& .MuiMenuItem-root': {
              py: 1,
              px: 2,
              typography: 'body2',
              borderRadius: 0.75,
            },
          }}
        >


          <MenuItem>
            <Iconify icon="ic:round-account-box" sx={{ ...ICON }} />
            Profile
          </MenuItem>

        </List>
      </MenuPopover>
    </>
  );
}
