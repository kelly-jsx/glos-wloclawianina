export const MainArticle = () => {
  return (
    <div
      className="w-screen h-64 flex flex-col justify-end gap-1 p-2"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/900×700/?fruit')`,
      }}
    >
      <div className="flex gap-2">
        <div className="badge badge-secondary">Historia</div>
        <div className="badge badge-secondary">Kultura i sport</div>
      </div>
      <p className="font-bold text-lg">Kino we Włocławku – krótka historia</p>
      <p>4 marca 2023</p>
    </div>
  )
}
