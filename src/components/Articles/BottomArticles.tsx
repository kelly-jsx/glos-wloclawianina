import React from 'react'

export const BottomArticles = () => {
  return (
    <div
      className="flex flex-col gap-1 justify-end w-screen h-32 bg-center bg-no-repeat bg-cover lg:w-full lg:rounded-lg lg:mb-2"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/900×700/?fruit')`,
      }}
    >
      <div className="p-2 bg-gradient-to-t from-base-300/90">
        <p className="text-lg font-bold">Kino we Włocławku – krótka historia</p>
        <p>4 marca 2023</p>
      </div>
    </div>
  )
}
