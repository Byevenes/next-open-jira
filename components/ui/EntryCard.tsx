import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../types'

type Props = {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry: { description, createdAt } }) => {
  return (
    <Card sx={{ mb: 1 }}>
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
