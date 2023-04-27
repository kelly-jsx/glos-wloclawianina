import Image from 'next/image'

import { Articles } from '@/components/Articles/Articles'
import { StartpageArticles } from '@/components/Articles/StartpageArticles/StartpageArticles'
import { Funfact } from '@/components/Funfact'

const funfact =
  'Na ścianie klasztoru Franciszkanów znajduje się karawaka, czyli krzyż epidemiczny z czasów epidemii cholery w XIX wieku'

export default function Home() {
  return (
    <main className="">
      <Articles />
      <div className="container p-3">
        <Funfact funfact={funfact} />
        <StartpageArticles title="historia" />
      </div>
    </main>
  )
}
