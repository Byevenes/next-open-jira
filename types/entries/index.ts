export type EntryStatus = "pending" | "in-progress" | "finished";

export type Entry = {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export type EntriesState = {
  entries: Entry[];
}

export type EntriesAction = {
  setEntries: (entries: Entry[]) => void
  addEntry: (newDescription: string) => void
  updateEntry: (entry: Entry) => void
  reset: () => void
  filterEntries: (status: EntryStatus) => Entry[]
}

export type EntriesStore = EntriesState & {
  actions: EntriesAction
}