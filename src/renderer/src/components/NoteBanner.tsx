import { useAtom } from 'jotai'
import { notesAtom } from '@renderer/store/notes'

type Note = {
  id: number
  noteName: string
  createdAt: string
  active: boolean
}
const NoteBanner = ({ id, noteName, createdAt, active }: Note) => {
  const [notes, setNotes] = useAtom(notesAtom)

  const handleNoteClick = () => {
    setNotes(
      notes.map((note) => ({
        ...note,
        active: note.id === id
      }))
    )
  }

  return (
    <div
      className={`cursor-pointer w-full flex flex-col gap-1 items-start justify-center 
    rounded-lg p-3 backdrop-blur-md transition duration-200 
     shadow-sm 
    ${active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-100 bg-zinc-800/30 border border-zinc-700/40 hover:bg-zinc-700/20 '}`}
      onClick={() => handleNoteClick()}
    >
      <p className="text-sm font-semibold truncate w-full">{noteName}</p>
      <span className="text-xs opacity-80">{createdAt}</span>
    </div>
  )
}

export default NoteBanner
