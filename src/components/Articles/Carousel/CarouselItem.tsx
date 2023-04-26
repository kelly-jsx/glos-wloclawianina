type Props = {
  title: string
  imgUrl: string
  slideId: number
}

export const CarouselItem = ({ title, imgUrl, slideId }: Props) => {
  let previousSlide: number
  let nextSlide: number

  if (slideId === 1) {
    previousSlide = 4
  } else {
    previousSlide = slideId - 1
  }

  if (slideId === 4) {
    nextSlide = 1
  } else {
    nextSlide = slideId + 1
  }

  return (
    <div id={`slide${slideId}`} className="relative w-full carousel-item">
      <img src={imgUrl} className="object-cover object-center w-full h-full" />
      <div className="absolute flex justify-between h-full transform -translate-y-1/2 right-5 left-5 top-1/2">
        <a
          href={`#slide${previousSlide}`}
          className="self-center opacity-50 btn btn-circle"
        >
          ❮
        </a>
        <div className="self-end p-2 px-4 mb-1 text-center rounded-md bg-base-100/40 w-fit">
          {title}
        </div>
        <a
          href={`#slide${nextSlide}`}
          className="self-center opacity-50 btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  )
}
