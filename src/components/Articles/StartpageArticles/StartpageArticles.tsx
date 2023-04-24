import { Article } from './Article'

type Props = {
  title: string
}

export const StartpageArticles = ({ title }: Props) => {
  return (
    <div className="p-3">
      <div className="w-full mb-2 border-b-4 border-b-primary">
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
      </div>
      <Article title="Jakieś gówno fajny artykuł" />
      <Article title="test1" />
    </div>
  )
}
