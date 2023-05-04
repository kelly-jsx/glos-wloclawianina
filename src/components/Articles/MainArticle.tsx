export const MainArticle = () => {
  return (
    <div
      className="flex flex-col gap-1 justify-end w-screen h-64 bg-center bg-no-repeat bg-cover lg:h-auto lg:w-full lg:rounded-lg lg:mb-2"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/900×700/?fruit')`,
      }}
    >
      <div className="p-2 bg-gradient-to-t rounded-lg from-base-300/90">
        <div className="flex gap-2">
          <div className="badge badge-secondary lg:text-lg">Historia</div>
          <div className="badge badge-secondary lg:text-lg">
            Kultura i sport
          </div>
        </div>
        <p className="text-lg font-bold lg:text-2xl">
          Kino we Włocławku – krótka historia
        </p>
        <p>4 marca 2023</p>
      </div>
    </div>
  )
}
