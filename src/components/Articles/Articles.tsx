import { MainArticle } from './MainArticle'
import { Carousel } from './Carousel/Carousel'
import { BottomArticles } from './BottomArticles'

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Article 1',
      imgUrl: 'https://source.unsplash.com/random/900×700/?fruit',
      categories: ['Category 1', 'Category 2'],
    },
    {
      id: 2,
      title: 'Article 2',
      imgUrl: 'https://source.unsplash.com/random/900×700/?fruit',
      categories: ['Category 1', 'Category 2'],
    },
    {
      id: 3,
      title: 'Article 3',
      imgUrl: 'https://source.unsplash.com/random/900×700/?fruit',
      categories: ['Category 1', 'Category 2'],
    },
    {
      id: 4,
      title: 'Article 4',
      imgUrl: 'https://source.unsplash.com/random/900×700/?fruit',
      categories: ['Category 1', 'Category 2'],
    },
    {
      id: 5,
      title: 'Article 5',
      imgUrl: 'https://source.unsplash.com/random/900×700/?fruit',
      categories: ['Category 1', 'Category 2'],
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-3 pb-4 w-screen bg-base-200 lg:hidden">
        <MainArticle />
        <Carousel articles={articles} />
        <button className="mx-auto btn btn-primary">
          Zobacz więcej tekstów
        </button>
      </div>
      <div className="hidden w-full lg:block">
        <div className="flex gap-2">
          <MainArticle />
          {/* test1 */}
          <div className="flex flex-col">
            <BottomArticles />
            <BottomArticles />
            <BottomArticles />
          </div>
        </div>
        <div className="flex gap-2">
          <BottomArticles />
          <BottomArticles />
          <BottomArticles />
        </div>
      </div>
    </>
  )
}
