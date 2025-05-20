import '@mdxeditor/editor/style.css'
import { useAtom } from 'jotai'
import { notesAtom } from '@renderer/store/notes'
import { useEffect, useState } from 'react'

const Content = ({ id }: { id: number }) => {
  const [notes, setNotes] = useAtom(notesAtom)
  const curNote = notes.find((note) => note.id === id)
  const [markdown, setMarkdown] = useState(curNote?.content || '')
  const [title, setTitle] = useState(curNote?.noteName || '')

  useEffect(() => {
    if (curNote) {
      setMarkdown(curNote.content)
      setTitle(curNote.noteName)
    }
  }, [id, notes])

  const handleNoteDelete = () => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setMarkdown(newContent)
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content: newContent } : note))
    )
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, noteName: newTitle } : note))
    )
  }

  if (!curNote) {
    return (
      <div className="flex-1 bg-zinc-900/30 border-l border-l-zinc-900/50 flex items-center justify-center relative z-10">
        <p className="text-zinc-400">No note selected</p>
      </div>
    )
  }

  return (
    <div className="flex-1 pt-5 bg-zinc-900/30 border-l border-l-zinc-900/50 relative">
      <div className="flex items-center justify-between p-2 relative z-10">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="text-zinc-100 text-sm font-semibold bg-transparent border-none outline-none relative z-10"
        />
        <button
          onClick={handleNoteDelete}
          className="bg-red-600/90 text-zinc-200/80 text-xs p-1 px-2 hover:bg-red-600/80 hover:cursor-pointer rounded-md relative z-10"
        >
          Delete Note
        </button>
      </div>
      <textarea
        value={markdown}
        onChange={handleContentChange}
        className="w-full h-[calc(100vh-4.5rem)] bg-transparent text-zinc-100 p-4 outline-none resize-none overflow-y-auto relative z-10"
      />
    </div>
  )
}

export default Content
