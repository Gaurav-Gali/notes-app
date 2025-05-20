import { useState } from 'react'
import { Search, FilePlus2 } from 'lucide-react'
import { useAtom } from 'jotai'
import { notesAtom } from '@renderer/store/notes'

export default function MacOSSearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const [notes, setNotes] = useAtom(notesAtom)

  const handleCreateNote = () => {
    const updatedNotes = notes.map((note) => ({
      ...note,
      active: false
    }))

    const newNote = {
      id: notes.length + 1,
      noteName: `New Note`,
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      content: `What's in your mind?`,
      active: true
    }

    setNotes([newNote, ...updatedNotes])
  }

  return (
    <div className="flex items-center justify-center gap-1 w-full max-w-md">
      <div
        className={`flex items-center w-full px-3 py-2 bg-zinc-100/5 rounded-lg border border-zinc-900/30 transition-all`}
      >
        <Search className="w-4 h-4 text-zinc-200/50 mr-2" />

        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-sm text-zinc-200/80 placeholder:text-zinc-200/50"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleCreateNote()}
        className="bg-zinc-200/10 p-3 hover:bg-zinc-200/5 cursor-pointer rounded-md"
      >
        <FilePlus2 className="w-3 h-3 text-zinc-200/80" />
      </button>
    </div>
  )
}
