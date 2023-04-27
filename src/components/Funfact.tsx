import React from 'react'

type Props = {
  funfact: string
}

export const Funfact = ({ funfact }: Props) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-2xl font-bold border-b-4 border-primary">
        Losowa ciekawostka
      </p>
      <p className="text-justify">{funfact}</p>
    </div>
  )
}
