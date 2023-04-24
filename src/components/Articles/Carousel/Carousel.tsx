import { CarouselItem } from './CarouselItem'

interface Article {
  title: string
  imgUrl: string
  id: number
}

interface Props {
  articles: Article[]
}

export const Carousel = ({ articles }: Props) => {
  return (
    // <div className="w-full h-28 carousel bg-gradient-to-t from-base-300/30 to-blue-500/0">
    <div className="w-full h-28 carousel">
      <>
        {articles.map((article, index) => (
          <CarouselItem
            key={index}
            title={article.title}
            imgUrl={article.imgUrl}
            slideId={article.id}
          />
        ))}
      </>
    </div>
  )
}
