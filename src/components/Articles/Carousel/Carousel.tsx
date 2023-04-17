import { CarouselItem } from './CarouselItem'

export const Carousel = (articles) => {
  return (
    <div className="mt-3 w-full h-28 carousel">
      <CarouselItem
        title="test1"
        imgUrl="https://source.unsplash.com/random/900×700/?fruit"
        slideId={1}
      />
      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://source.unsplash.com/random/900×700/?fruit"
          className="w-full"
        />
        <div className="flex absolute right-5 left-5 top-1/2 justify-between h-full transform -translate-y-1/2">
          <a href="#slide1" className="self-center btn btn-circle">
            ❮
          </a>

          <p className="self-end shadow">Article title</p>

          <a href="#slide3" className="self-center btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://source.unsplash.com/random/900×700/?fruit"
          className="w-full"
        />
        <div className="flex absolute right-5 left-5 top-1/2 justify-between h-full transform -translate-y-1/2">
          <a href="#slide2" className="self-center btn btn-circle">
            ❮
          </a>

          <p className="self-end shadow">Article title</p>

          <a href="#slide4" className="self-center btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img
          src="https://source.unsplash.com/random/900×700/?fruit"
          className="w-full"
        />
        <div className="flex absolute right-5 left-5 top-1/2 justify-between h-full transform -translate-y-1/2">
          <a href="#slide3" className="self-center btn btn-circle">
            ❮
          </a>

          <p className="self-end shadow">Article title</p>

          <a href="#slide1" className="self-center btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}
