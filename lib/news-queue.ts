import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

export type NewsDraft = { id: string; chatId: number; userId: number; text: string; photoFileId?: string; createdAt: string }
export type ScheduledNews = NewsDraft & { publishAt: string }
export type NewsState = { offset: number; drafts: Record<string, NewsDraft>; awaitingContent: Record<string, boolean>; awaitingDate: Record<string, string>; queue: ScheduledNews[] }

const statePath = resolve(process.env.NEWS_STATE_FILE || './data/telegram-news.json')
const emptyState = (): NewsState => ({ offset: 0, drafts: {}, awaitingContent: {}, awaitingDate: {}, queue: [] })

export async function readNewsState(): Promise<NewsState> {
  try { return { ...emptyState(), ...JSON.parse(await readFile(statePath, 'utf8')) } }
  catch (error) { if ((error as NodeJS.ErrnoException).code === 'ENOENT') return emptyState(); throw error }
}

export async function writeNewsState(state: NewsState) {
  await mkdir(dirname(statePath), { recursive: true })
  const temporary = `${statePath}.${process.pid}.tmp`
  await writeFile(temporary, JSON.stringify(state, null, 2), { mode: 0o600 })
  await rename(temporary, statePath)
}
