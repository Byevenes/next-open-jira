import { List, Paper } from '@mui/material'
import React, { FC } from 'react'
import { useEntriesByStatus } from '../../store'
import { EntryStatus } from '../../types'
import { useHasHydrated } from '../../utils/helpers/useHasHydrated'
import { EntryCard } from './EntryCard'

type Props = {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const isHasHydrated = useHasHydrated()
  const entriesByStatus = useEntriesByStatus(status)
  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', p: '3px 5px' }}>
        <List sx={{ opacity: 1 }}>
          {isHasHydrated && entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
