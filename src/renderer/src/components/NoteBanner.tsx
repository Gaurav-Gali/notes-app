import { useState } from 'react'

type Note = {
  id: number
  noteName: string
  createdAt: string
  active: boolean
}

const NoteBanner = ({ id, noteName, createdAt,active }: Note) => {

  const handleNoteClick = () => {
    console.log(id)
  }
  return (
    <div
      className={`cursor-pointer w-full flex flex-col gap-1 items-start justify-center 
    rounded-lg p-3 backdrop-blur-md transition duration-200 
    border border-zinc-700/40 shadow-sm 
    bg-zinc-800/30
    ${active ? 'bg-zinc-100/90 border-zinc-300 text-zinc-900' : 'text-zinc-100 hover:bg-zinc-700/20 '}`}
      onClick={() => handleNoteClick()}
    >
      <p className="text-sm font-semibold truncate w-full">{noteName}</p>
      <span className="text-xs opacity-80">{createdAt}</span>
    </div>
  )
}

export default NoteBanner
