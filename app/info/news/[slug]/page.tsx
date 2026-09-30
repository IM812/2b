import { permanentRedirect } from 'next/navigation'

export const dynamicParams = true

export default function ArticlePage() {
  permanentRedirect('/')
}
