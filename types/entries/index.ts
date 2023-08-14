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
  reset: () => void
}

export type EntriesStore = EntriesState & {
  actions: EntriesAction
}