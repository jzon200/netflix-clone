import { FC } from 'react'
import { Movie } from '../typings'
import Image from 'next/image'

type Props = {
  movie: Movie
}

const Thumbnail: FC<Props> = (props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          props.movie.backdrop_path || props.movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
