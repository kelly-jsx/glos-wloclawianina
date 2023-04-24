import Image from 'next/image'

import { Articles } from '@/components/Articles/Articles'
import { StartpageArticles } from '@/components/Articles/StartpageArticles/StartpageArticles'

export default function Home() {
  return (
    <main className="">
      <Articles />
      <StartpageArticles title="historia" />
    </main>
  )
}
