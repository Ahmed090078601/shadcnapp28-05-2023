import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { HiOutlineChevronDown } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearch } from "react-icons/bi"
import { NavbarArray, NavbarItemType } from '../utils/NavbarArrayAndTypes'
import DropDown from './DropDown'
import Cartstate from '../NavBar/subComponents/Cartstate'
const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
       <div className="py-5 flex justify-between items-center gap-8">
                    <Link href="/" className="w-36 flex-shrink-0">
                        <Image width={500} height={500} src={"/Logo1.webp"} alt="Logo" />
                    </Link>
                    <div className='lg:flex justify-between items-center w-full'>
                      <ul className='flex space-x-4 font-medium text-lg text-purple-950'>
                        {NavbarArray.map((item:NavbarItemType, index: number) =>(
                          <li  key={index} className='flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group'>
                          <Link href={item.href}>{item.label}</Link>
                          {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                                    {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
                                        <DropDown item={item} />
                                    </div>}
                          </li>
                        ))}
                      </ul>
                      <div className='border flex items-center bg-white text-gray-600 pl-3 rounded-md'>
                          <Link href={'/search/${searchQuery}'}><BiSearch/> </Link>
                          <input type="text" 
                          // value={searchQuery}
                          // onKeyDown={handleSearchCalledFunc}
                          // onChange={(e) => setSearchQuery(e.target.value)}
                          className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
                          placeholder="Search in Our Store"
                          />
                      </div>
                      <Link href={'/cart'}>
                        <Cartstate/>
                      </Link>
                    </div>
    </div>
    </div>
  )
}

export default Navbar
