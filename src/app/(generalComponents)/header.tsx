"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import SearchModal from './searchModal/searchModal';

const Header = () => {
  const [isSearchModelOpen, setIsSearchModelOpen] = useState(false)

  return (
    <>
    <header className="sticky top-0 z-1000 flex justify-between 
    bg-dark py-4 px-10 border-b-1 border-light-medium lg:px-10">
      {/* Icon + Title */}
      <div className="col-span-3 flex items-center gap-4">
        <Link href="/home">
          <Image
            src="/icons/destiny-icon-white.svg"
            alt="Icon of the page"
            width={32}
            height={32}
            className='transition duration-300 hover:scale-120
            bg-amber-600 md:bg-red-500 sm:bg-green-600 lg:bg-blue-600 xl:bg-purple-500 2xl:bg-green-500'
          />
        </Link>
        <p className="text-xl hidden lg:block">D.A.M</p>
      </div>

      {/* Search Bar */}
      <div className="w-1/2 lg:w-150
      flex items-center gap-3 bg-medium py-1 px-3 rounded-md
      border-2 border-medium-dark
      hover:border-blue-500 hover:bg-gray-500"
      onClick={() => setIsSearchModelOpen(true)}>
        <Image
          src="/icons/search-icon.svg"
          alt="Search icon"
          width={22}
          height={22}
        />
        <p className="text-sm">Search...</p>
      </div>
      {/* Wish List icon */}
      <div className='flex items-center gap-4 
      transition duration-300 hover:scale-120'>
        <Link href="/wishlist">
            <Image
              src="/icons/wish-list-icon.svg"
              alt="Wish list icon"
              width={32}
              height={32}
            />
        </Link>
      </div>
    </header>
      {isSearchModelOpen && (
        <SearchModal
          isOpen={isSearchModelOpen}
          setIsOpen={setIsSearchModelOpen}
        />
      )}
    </>
  )
};

export default Header
