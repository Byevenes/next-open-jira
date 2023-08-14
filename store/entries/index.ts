import { create } from "zustand";
import { persist, combine, devtools, createJSONStorage } from "zustand/middleware";
import { EntriesState, EntriesStore, Entry, EntryStatus } from "../../types";
import { v4 as uuidv4 } from 'uuid';

const initialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "This is a test entry",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description: "This is a test entry 2",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description: "This is a test entry 3",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
      status: "finished",
    }
  ],
};

export const useEntriesStore = create<EntriesStore>()(
  devtools(
    persist(
      combine(initialState, (set) => ({
        actions: {
          setEntries: (entries: Entry[]) => set({ entries }),
          reset: () => set({ ...initialState }),
        },
      })),
      {
        name: "entries",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      enabled: false,
    }
  ),
);

export const useEntries = () => useEntriesStore((state) => state.entries);
export const useEntriesActions = () => useEntriesStore((state) => state.actions);
export const useEntriesByStatus = (status: EntryStatus) =>
  useEntriesStore(({ entries }) => entries.filter((entry) => entry.status === status));