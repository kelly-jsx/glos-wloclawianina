import Image from 'next/image'
import { MainArticle } from './MainArticle'
import { Carousel } from './Carousel'

export const Articles = () => {
  return (
    <div className="w-full bg-base-200">
      <MainArticle />
      <Carousel />
    </div>
  )
}
