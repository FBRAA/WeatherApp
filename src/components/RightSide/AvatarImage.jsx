import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pic from '../../images/avatar.jpg';

const AvatarImage = () => (
  <Stack direction="row" spacing={2}>
    <Avatar
      alt="Dominic Coomer"
      src={pic}
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  </Stack>
)

export default AvatarImage
