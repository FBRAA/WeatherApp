import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Coomer from '../images/avatar.jpg';

const AvatarImage = () => (
  <Stack direction="row" spacing={2}>
    <Avatar
      alt="Dominic Coomer"
      src={Coomer}
      sx={{
        'max-Width': '20px',
      }}
    />
  </Stack>
)

export default AvatarImage
