import React, { FC, useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'

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
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="header-links">Home</li>
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
        <Link href="/accounts">
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
