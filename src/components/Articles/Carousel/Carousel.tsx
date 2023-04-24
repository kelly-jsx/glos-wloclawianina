import { CarouselItem } from './CarouselItem'

interface Article {
  title: string
  imgUrl: string
}

interface Props {
  articles: Article[]
}

export const Carousel = ({ articles }: Props) => {
  return (
    <div className="w-full h-28 carousel">
      <>
        {articles.map((article, index) => (
          <CarouselItem
            key={index}
            title={article.title}
            imgUrl={article.imgUrl}
            slideId={index}
          />
        ))}
      </>
    </div>
  )
}
