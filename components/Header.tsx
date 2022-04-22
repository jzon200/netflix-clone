import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import BasicMenu from './BasicMenu'

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // change the isScrolled state if scrolled
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <header
      className={`${
        isScrolled
          ? 'bg-[#141414] transition duration-500'
          : 'bg-[#14141400] transition duration-500'
      }`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="header-links font-bold">Home</li>
          <li className="header-links">TV Shows</li>
          <li className="header-links">Movies</li>
          <li className="header-links">New & Popular</li>
          <li className="header-links">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
