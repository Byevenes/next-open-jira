import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../types'
import { useSetAtom } from 'jotai'
import { isDraggingAtom } from '../../atom'

type Props = {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry: { _id, description, createdAt } }) => {
  const toggleDragging = useSetAtom(isDraggingAtom)

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('entryId', _id)
    toggleDragging(true)
  }

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag end')
    toggleDragging(false)
  }

  return (
    <Card draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      sx={{ mb: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', pr: 2 }}>
          <Typography variant='body2'>{createdAt}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
