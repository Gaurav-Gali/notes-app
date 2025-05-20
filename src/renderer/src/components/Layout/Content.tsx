import { markdownShortcutPlugin, MDXEditor } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'

const Content = () => {
  return (
    <div className="flex-1 bg-zinc-900/30 border-l border-l-zinc-900/50">
      <div className="flex items-center justify-between p-2">
        <p className="text-zinc-100 text-sm font-semibold">Note title</p>
        <button onClick={() => alert("delted")} className="bg-red-600/90 text-zinc-200/80 text-xs p-1 px-2 hover:bg-red-600/80 hover:cursor-pointer rounded-md">
          Delete Note
        </button>
      </div>
      <MDXEditor
        markdown=""
        contentEditableClassName="text-zinc-100 h-[calc(100vh-2.5rem)] overflow-y-auto"
        plugins={[headingsPlugin(), markdownShortcutPlugin()]}
      />
    </div>
  )
}

export default Content
