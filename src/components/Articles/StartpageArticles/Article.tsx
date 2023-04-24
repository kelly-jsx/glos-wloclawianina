import { BsCalendarDateFill } from 'react-icons/bs'

type Props = {
  title: string
}

export const Article = ({ title }: Props) => {
  const randomPhoto = 'https://source.unsplash.com/random/900×700/?fruit'

  return (
    <div className="flex flex-col gap-3 mb-10">
      <img
        src={randomPhoto}
        alt={title}
        className="object-cover object-center w-full h-40 rounded-md"
      />
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex items-center gap-1">
        <BsCalendarDateFill />
        <p>2 kwietnia 2005</p>
      </div>
      <p className="text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        praesentium quia sit eum minus quaerat rem, accusamus non aspernatur ea
        nisi architecto cupiditate deleniti et tenetur asperiores accusantium?
        Nostrum, ullam?
      </p>
      <button className="btn btn-primary btn-sm w-max">Czytaj dalej</button>
    </div>
  )
}
