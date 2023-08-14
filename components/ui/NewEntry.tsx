import React from 'react'
import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'

export const NewEntry = () => {
  return (
    <Box sx={{ mb: 2, px: 2 }}>
      <Button
        startIcon={<AddCircleOutlineOutlined />}
        fullWidth
        variant='outlined'
      >
        Nueva entrada
      </Button>
      <TextField
        fullWidth
        sx={{ my: 2 }}
        placeholder={'Nuevo entrada'}
        autoFocus
        multiline
        label={'Nueva entrada'}
        helperText={'Ingrese un valor'} />
      <Box display={'flex'} justifyContent={'space-between'}>
        <Button variant='text'>
          Cancelar
        </Button>
        <Button variant='outlined' color='secondary' endIcon={<SaveOutlined />}>
          Guardar
        </Button>
      </Box>
    </Box>
  )
}
