import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { DocumentData } from 'firebase/firestore'
import { FC, useEffect, useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

type Props = {
  title: string
  movies: Movie[] | DocumentData[]
}

const Row: FC<Props> = (props) => {
  const [isMoved, setIsMoved] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  const scrollHandler = (direction: string) => {
    setIsMoved(true)

    const { scrollLeft, clientWidth } = rowRef.current!

    const scrollDirection =
      direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

    rowRef.current!.scrollTo({ left: scrollDirection, behavior: 'smooth' })
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="cursor-pointer text-base font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-3xl">
        {props.title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => scrollHandler('left')}
          className={`carousel-control-icon left-2 ${!isMoved && 'hidden'}`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {props.movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => scrollHandler('right')}
          className="carousel-control-icon right-2"
        />
      </div>
    </div>
  )
}

export default Row
