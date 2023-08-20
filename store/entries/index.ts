import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EntriesStore, Entry, EntryStatus } from "../../types";
import { v4 as uuidv4 } from 'uuid';

export const initialState: EntriesStore = {
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
  actions: {
    setEntries: () => { return },
    addEntry: () => { return },
    reset: () => { return },
    updateEntry: () => { return },
    filterEntries: () => { return [] },
  },
};

export const useEntriesStore = create<EntriesStore>()(
  devtools(
    (set, get) => ({
      entries: initialState.entries,
      actions: {
        setEntries: (entries: Entry[]) => {
          set({ entries });
        },
        addEntry: (newDescription: Entry["description"]) => {
          const newEntry: Entry = {
            _id: uuidv4(),
            description: newDescription,
            createdAt: Date.now(),
            status: "pending",
          };
          set({ entries: [...get().entries, newEntry] });
        },
        updateEntry: (value: Entry) => {
          const updateEntry = get().entries.map((entry) => {
            if (entry._id === value._id) {
              entry.status = value.status;
              entry.description = value.description;
            }
            return entry;
          });
          set({ entries: updateEntry });
        },
        filterEntries: (status: EntryStatus) => {
          set({
            entries: get().entries.filter((entry) => entry.status === status),
          });
          return get().entries;
        },
        reset: () => set(initialState),
      },
    }),
  )
);

export const useEntries = () => useEntriesStore((state) => state.entries);
export const useEntriesActions = () => useEntriesStore((state) => state.actions);
export const useEntriesByStatus = (status: EntryStatus) =>
  useEntriesStore(({ entries }) => entries.filter((entry) => entry.status === status));