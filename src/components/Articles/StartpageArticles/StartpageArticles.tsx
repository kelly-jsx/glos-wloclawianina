import { Article } from './Article'

type Props = {
  title: string
}

export const StartpageArticles = ({ title }: Props) => {
  return (
    <>
      <div className="mb-4 w-full border-b-4 border-b-primary">
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Article title="Jakieś gówno fajny artykuł" />
        <Article title="test1" />
        <Article title="test1" />
        <Article title="test1" />
      </div>
    </>
  )
}
