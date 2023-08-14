import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import { Navbar, Sidebar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />
      <Box sx={{ p: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  );
};