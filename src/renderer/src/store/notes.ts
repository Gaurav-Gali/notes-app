import { atom } from 'jotai'

type Note = {
  id: number
  noteName: string
  createdAt: string
  active: boolean
  content: string
}

const notes: Note[] = Array.from({ length: 1 }, (_, i) => ({
  id: i + 1,
  noteName: `Note ${i + 1}`,
  createdAt: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  content: `Content ${i + 1}`,
  active: false
}))

export const notesAtom = atom<Note[]>(notes)
