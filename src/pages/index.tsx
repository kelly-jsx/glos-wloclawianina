import Image from 'next/image'

import { Articles } from '@/components/Articles/Articles'
import { StartpageArticles } from '@/components/Articles/StartpageArticles/StartpageArticles'
import { Funfact } from '@/components/Funfact'

const funfact =
  'Na ścianie klasztoru Franciszkanów znajduje się karawaka, czyli krzyż epidemiczny z czasów epidemii cholery w XIX wieku'

export default function Home() {
  return (
    <main>
      <div className="lg:hidden">
        <Articles />
      </div>
      <div className="container flex flex-col p-3 mx-auto lg:flex-row-reverse lg:gap-24">
        <div>
          <Funfact funfact={funfact} />
        </div>
        <div>
          <div className="hidden lg:block">
            <Articles />
          </div>
          <StartpageArticles title="historia" />
          <StartpageArticles title="historia" />
          <StartpageArticles title="historia" />
          <StartpageArticles title="historia" />
        </div>
      </div>
    </main>
  )
}
