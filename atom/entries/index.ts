import { atom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

type EntryStatus = "pending" | "in-progress" | "finished";

type Entry = {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
};

export const initialEntries: Entry[] = [
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
]

export const entriesAtom = atomWithStorage<Entry[]>('entries', initialEntries)

entriesAtom.debugLabel = "entriesAtom";

export const setEntriesAtom = atom(null, (get, set, entries: Entry[]) => {
  set(entriesAtom, entries);
});

export const addEntryAtom = atom(null, (get, set, newDescription: Entry["description"]) => {
  const newEntry: Entry = {
    _id: uuidv4(),
    description: newDescription,
    createdAt: Date.now(),
    status: "pending",
  };
  set(entriesAtom, [...get(entriesAtom), newEntry]);
});

export const updateEntryAtom = atom(null, (get, set, value: Entry) => {
  const updateEntry = get(entriesAtom).map((entry) => {
    if (entry._id === value._id) {
      entry.status = value.status;
      entry.description = value.description;
    }
    return entry;
  });
  set(entriesAtom, updateEntry);
});

// creamos un hook que reciba un atom para filtrar las entradas

export const useFilterEntriesAtom = (status: EntryStatus) => {
  const entries = useAtomValue(entriesAtom);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => entry.status === status);
  }, [entries]);

  return filteredEntries;
};

// filterEntriesAtom.debugLabel = "filterEntriesAtom";

export const resetAtom = atom(null, (get, set) => {
  set(entriesAtom, initialEntries);
});