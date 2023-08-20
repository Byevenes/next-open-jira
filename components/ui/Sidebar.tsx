import { Box, Divider, Drawer, List, ListItem, Typography } from '@mui/material'
import React from 'react'

import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { useDisplayModal } from '../../context/ui';
import { useAtom } from 'jotai';
import { isActiveAtom } from '../../atom';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  //const { closeModal, displayModalState: { state: { isOpen } } } = useDisplayModal()
  const [isActive, toggle] = useAtom(isActiveAtom)

  return (
    <Drawer anchor='left' open={isActive} onClose={() => toggle(false)}>
      <Box sx={{ width: '250px' }}>
        <Box sx={{ p: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem sx={{ gap: 2 }} button key={index.toString()}>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                {item}
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem sx={{ gap: 2 }} button key={index.toString()}>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}
