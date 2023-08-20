import React, { useState } from 'react'
import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { useEntriesActions } from '../../store'
import { useAtom } from 'jotai'
import { isAddingAtom } from '../../atom'

export const NewEntry = () => {
  const { addEntry } = useEntriesActions()

  const [isAdding, toggleAdding] = useAtom(isAddingAtom)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setTouched(true)
  }

  const isInvalid = touched && inputValue.length <= 0

  const handleSave = () => {
    if (inputValue.length <= 0) return

    addEntry(inputValue)
    toggleAdding(false)
    setTouched(false)
    setInputValue('')
  }

  return (
    <Box sx={{ mb: 2, px: 2 }}>
      {isAdding ? (
        <>
          <TextField
            value={inputValue}
            fullWidth
            sx={{ my: 2 }}
            maxRows={4}
            placeholder={'Nuevo entrada'}
            autoFocus
            multiline
            label={'Nueva entrada'}
            {...(isInvalid && { error: true, helperText: 'El campo no puede estar vacío' })}
            error={isInvalid}
            onChange={handleInputChange}
            onBlur={() => setTouched(true)}
          />
          <Box display={'flex'} justifyContent={'space-between'}>
            <Button variant='text' onClick={() => toggleAdding(false)}>
              Cancelar
            </Button>
            <Button onClick={() => handleSave()} variant='outlined' color='secondary' endIcon={<SaveOutlined />}>
              Guardar
            </Button>
          </Box>
        </>
      ) :
        <Button
          startIcon={<AddCircleOutlineOutlined />}
          fullWidth
          variant='outlined'
          onClick={() => toggleAdding(true)}
        >
          Nueva entrada
        </Button>}
    </Box>
  )
}
