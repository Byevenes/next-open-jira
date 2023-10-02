import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDisplayModal } from '../../context/ui';
import { useSetAtom } from 'jotai';
import { isActiveAtom } from '../../atom';

export const Navbar: React.FC = () => {
  //const { openModal } = useDisplayModal()
  const toggleModal = useSetAtom(isActiveAtom)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton onClick={() => toggleModal(true)} size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};