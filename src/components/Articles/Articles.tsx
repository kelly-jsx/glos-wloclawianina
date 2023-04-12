import Image from 'next/image'
import { MainArticle } from './MainArticle'

export const Articles = () => {
  return (
    <div className="w-full bg-base-200">
      <h1>articles</h1>
      <MainArticle />
    </div>
  )
}
