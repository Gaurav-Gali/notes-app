import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context Isolation must be enabled in browser window')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //
  })
} catch (error) {
  console.error(error)
}
