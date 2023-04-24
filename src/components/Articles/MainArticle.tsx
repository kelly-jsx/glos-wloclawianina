export const MainArticle = () => {
  return (
    <div
      className="flex flex-col justify-end w-screen h-64 gap-1 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/900×700/?fruit')`,
      }}
    >
      {/* <div className="p-2 bg-base-300/50"> */}
      <div className="p-2 bg-gradient-to-t from-base-300/90">
        <div className="flex gap-2">
          <div className="badge badge-secondary">Historia</div>
          <div className="badge badge-secondary">Kultura i sport</div>
        </div>
        <p className="text-lg font-bold">Kino we Włocławku – krótka historia</p>
        <p>4 marca 2023</p>
      </div>
    </div>
  )
}
