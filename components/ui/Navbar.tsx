import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDisplayModal } from '../../context/ui';

export const Navbar: React.FC = () => {
  const { openModal } = useDisplayModal()
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton onClick={openModal} size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};