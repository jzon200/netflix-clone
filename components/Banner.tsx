import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

type Props = {
  netflixOriginals: Movie[]
}

const Banner: FC<Props> = (props) => {
  const [movie, setMovie] = useState<Movie>()
  const { netflixOriginals } = props

  useEffect(() => {
    const randomMovie =
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]

    setMovie(randomMovie)
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="fixed top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

      <h1 className="font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="w-4 text-black md:w-6" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          <InformationCircleIcon className="w-5 md:w-8" />
          More Info
        </button>
      </div>
    </div>
  )
}

export default Banner
