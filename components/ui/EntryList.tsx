import { List, Paper } from '@mui/material'
import React, { FC } from 'react'
import { EntryStatus } from '../../types'
import { EntryCard } from './EntryCard'
import { useAtom, useSetAtom, useAtomValue } from 'jotai'
import { entriesAtom, isDraggingAtom, updateEntryAtom, useFilterEntriesAtom } from '../../atom'

type Props = {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const [isDragging, toggleDragging] = useAtom(isDraggingAtom)
  const entries = useAtomValue(entriesAtom)

  const updateEntry = useSetAtom(updateEntryAtom)

  const filter = useFilterEntriesAtom(status)

  //const entriesByStatus = useEntriesByStatus(status)

  // const entries = useEntries()

  // const { updateEntry } = useEntriesActions() 

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('entryId')
    const entry = entries.find((entry) => entry._id === id)
    if (entry) {
      entry.status = status
      updateEntry(entry)
      toggleDragging(false)
    }
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      {...(isDragging && {
        style: {
          opacity: 0.5,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          border: '1px dashed white'
        }
      })}
    >
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', p: '3px 5px' }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {filter.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
