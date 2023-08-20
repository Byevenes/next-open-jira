import { WritableAtom, atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export function atomWithToggle(
  initialValue?: boolean
): WritableAtom<boolean | undefined, [nextValue?: boolean | undefined], boolean | undefined> {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom)
    set(anAtom, update)
  })

  return anAtom as WritableAtom<boolean | undefined, [nextValue?: boolean | undefined], boolean | undefined>
}

export function atomWithToggleAndStorage(
  key: string,
  initialValue?: boolean,
  storage?: any
): WritableAtom<unknown, [nextValue?: boolean | undefined], void> {
  const anAtom = atomWithStorage(key, initialValue, storage)
  const derivedAtom = atom(
    (get) => get(anAtom),
    (get, set, nextValue?: boolean) => {
      const update = nextValue ?? !get(anAtom)
      set(anAtom, update)
    }
  )

  return derivedAtom
}

export const isAddingAtom = atomWithToggle(false)
isAddingAtom.debugLabel = "isAddingAtom";

export const isActiveAtom = atomWithToggle(false)

isActiveAtom.debugLabel = "isActiveAtom";

export const isDraggingAtom = atomWithToggle(false)

isDraggingAtom.debugLabel = "isDraggingAtom";