import { atom } from 'jotai'

export const hashAtom = atom<string, [string], void>(
  typeof window === 'object' ? location.hash : '',
  (get, set, hash) => {
    location.hash = hash

    set(hashAtom, hash)
  }
)
