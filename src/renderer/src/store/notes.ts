import { atom } from 'jotai'

type Note = {
  id: number
  noteName: string
  createdAt: string
  active: boolean
  content: string
}

export const notesAtom = atom<Note[]>([])
