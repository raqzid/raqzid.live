import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import Link from 'next/link'
export default function Header() {
  return (

    <div>
      <nav className='bg-white bg-opacity-50 z-40 backdrop-blur-sm fixed  text-black flex justify-between items-center xl:px-[12.5rem] lg:px-[12.5rem] md:px-[2rem] sm:px-[2rem] px-[2rem] h-[4rem] w-full'>
        <Link href='/'>
          <a>
          <div>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 979 396" width="79" height="50"><path fill-rule="evenodd" class="a" d="m159.9 247.7v21.6q0 76-83.8 103.6-13.7 4.8-30.6 4.8-25.3 0-36.9-13.1-8-9-8-20.8 0-16.7 14.4-31.7l12.5-12.4q-5.2 7-5.2 13.1 0 7.6 6.1 13.4 6.1 5.6 14.9 9 8.9 3.4 18.1 4l5.9 0.1q17.3 0 28.1-3.5 9.3-3.1 13.8-7.5 4.6-4.4 5.8-10.3 1.3-6 1.3-19.2l-0.1 0.2v-125.9q0-8.5 2.9-13.7 3-5.2 7.6-8.6 4.7-3.5 10.3-6.6 6.4-3.4 12.3-7.9 6.1-4.7 10.6-12.3v109.2q11.9-0.1 22.6-2.1 18.1-3.3 27.4-17.7 4.8-7.4 4.8-18 0-26-28.3-55.6-21.1-22-49.4-41.1-11.9-7.9-22-17.3-14.5-13.6-14.5-28.4 0-9.6 5.2-17.8 5.2-8.2 12.7-15.1 7.6-6.9 15.4-13 4.2-3.2 7.9-6.3l-0.6 0.8q-4.2 5-8 10.9-3.7 5.9-3.7 12.7 0 10.6 13.4 22.1 10.2 8.9 24.9 19.2 12.2 8.6 25.7 19.1 27.3 21.4 44.6 45 18.2 25 18.2 49.1 0 37.4-43.1 56.9 6.6 3 13.6 8.6 11.3 8.5 16.9 19.9 5.6 11.4 7.8 26.7 1.1 7.7 1.8 16.6 1 13.4 3.5 26.7 2.6 13.3 9.3 23.3 9.1 12.3 23.2 17.6 8.4 3.1 22.4 3.1l-0.1 0.3q-0.7 3.7-6.4 6.6-9.6 5.3-22.8 5.3-13.4 0-28.3-6.4-11.5-4.9-20.7-13.3-12.3-12.5-18.5-34.1-6.1-21.6-6.6-39.2-0.4-31.6-7.6-41.4-4.6-6.1-10.9-7.9-6.2-1.8-13-1.8-4.5 0-8.7 0.3-4.3 0.2-8.1 0.2zm226.5 62.4q-14.8 0-23.3-7.5-8.3-7.4-11.7-20.4-5.6 12.5-15.1 20.3-9.3 7.6-24.1 7.6-10.3 0-19.6-3.8-9.2-3.9-16.7-11.7-8.3-8.9-12.5-20.9-4.1-12-4.1-24.4 0-7.5 1.5-14.8 5.1-21.5 18.6-34.9 13.6-13.4 32.1-23.4 9.4-5.2 20-10.5 18.2-8.6 34.3-19.1 16.2-10.8 23.3-26v139q0 7.2 1.1 11.8 1.2 4.7 4.5 7 3.6 2.2 10.2 2.2 6.8 0 11.4-3.9 4.7-4.1 7.2-10.2 1.4-3.3 2.2-6.7-0.1 0-0.1-0.1-0.8-9.1-0.8-19.2v-6.9q0-16.1 5.1-27.6 5.1-11.6 13.2-19.8 8.4-8.3 18-14.4 9.7-6.2 19-11.1 11.5-5.8 19.6-11.7 8.4-6 10.8-13.9 18.6 13 27.9 25 9.5 11.9 12.6 25.8 3.2 14 3.4 33.2v176.7q-4.7-8.2-10.8-12.7-5.9-4.5-13.4-8.5l-4.6-2.5q-15-9.2-15-25.4v-54.1q-11.9 17.4-33 17.4-10.3 0-19.6-3.8-9.4-4-17-11.9-5.8-6.2-9.2-12.8-0.5 1-1.1 1.9-5.1 9.5-12.4 16-11.8 10.7-31.9 10.7zm-62.2-29.1q3.8 0 8.3-2.1 7.1-3.6 9.9-10.8 2.9-7.2 2.9-15v-74.8l-7.6 4.4q-17.2 9.9-24.7 21-9.7 14.5-9.7 39.9 0 20.9 9 31.8 4.7 5.6 11.9 5.6zm165.2-0.1q3.8 0 8.4-2.1 7-3.7 9.8-10.9 3-7.2 3-14.9v-47.5q0-7.4-3.1-14.5-3-7-9.7-10.4-4.3-2.2-8.2-2.2-4 0-8.2 2.2-6.8 3.4-9.9 10.4-3 7.1-3 14.5l-0.1 21.9q0 24.6 2.4 34.5 2.1 7.7 6.8 13.4 4.6 5.6 11.8 5.6zm184.8 61.7q-0.7 0-0.7-0.3 0-0.7 0.7-2 2.9-5.5 2.9-11.6 0-2.6-0.5-5.9-2.7-12.3-11.5-19.9-8.6-7.6-21.8-8.9-6.7-0.5-12.3-0.5-12.6 0-22.9 2.8-10.3 2.7-17.3 5.9-7.1 3.1-10.1 4.8l-1.8 1q1.1-16.4 8.9-34 7.9-17.8 18.9-33.2 11-15.5 21.6-25 4.9-4.3 11.4-9.3-0.5-0.4-1.2-0.7-4-2.7-12.6-7-10.2-5.1-19.9-11.5-9.5-6-16.1-14.2-7.2-8.9-7.2-20.5 0-11.5 7.8-21.6 6.8-8.6 15.1-13.7-1.6 3.7-1.6 8.2l0.2 2.4q0 6.2 8.7 14.7 8.8 7.3 25.6 16.5 16.8 9 34.1 17.7 24.8 12.1 33.6 18.2-12.1 6-27.9 16.8-15.7 10.7-29.1 23.5-13.3 12.9-18.1 25.3 6.8-1.1 13.9-1.1 15.2 0 28.7 5 9.6 4.1 16.1 9.9 11.3 10.5 14.3 21.5 1.1 4.5 1.1 10.5-1.5 24.2-26.1 34.6-3.7 1.6-4.9 1.6zm85.3-32.8q-9.6 0-17.9-2.9-8.2-3.1-13.2-9.9-9.4-13-9.4-34.2v-79q0-16.4 14.9-25.4l4.6-2.7q7.5-3.8 13.6-8.3 6-4.7 10.7-12.7v124.8q0 7.2 1.1 11.8 1.1 4.7 4.5 6.9 3.4 2.3 10.2 2.3 6.8 0 11.3-4 4.6-4.1 7.2-10.1 1.9-4.6 2.7-9.4-1.3-8.5-1.3-17.2 0.1-25.1 10.2-41.5 9.6-15.5 24.8-25.9 15.4-10.6 33.4-19.9 9.1-4.8 18.2-10v-32.5q0-16.1 14.9-25.4l4.3-2.4q7.7-3.9 13.7-8.5 6.2-4.6 10.9-12.8v198.7q0 7.2 1.1 11.8 1.2 4.7 4.5 7 3.6 2.2 10.2 2.2 6.8 0 11.4-3.9 4.7-4.1 7.2-10.2 2.6-6.1 3-12.7h12.7q-2.3 18.6-8.5 29.6-5.1 9.5-12.4 16-11.8 10.7-31.9 10.7-14.8 0-23.3-7.5-8.3-7.4-11.7-20.4-5.6 12.5-15.1 20.3-9.3 7.6-24.1 7.6-10.3 0-19.6-3.8-9.2-3.9-16.7-11.7-5.9-6.5-9.6-14.7-0.8 1.8-1.7 3.4-5.1 9.5-12.4 16-11.9 10.5-32.5 10.5zm12.3-210.7l-30.9 31.1-31-31.1 31-30.9zm93.2 181.5q3.6 0 7.3-1.7 6.8-3.5 9.7-10.4 3.1-7.1 3.1-14.7v-90.6l-7.6 4.5q-14.8 8.5-22.3 17.8-7.5 9.3-9.9 21.6-2.4 12.1-2.4 29.8 0 16.1 2.4 25.1 4.1 15.7 13.4 17.9 3.4 0.7 6.3 0.7z"/></svg>
        </div>
          </a>
        </Link>
        <div className=''>

          <ul className='text-sm hidden lg:flex md:flex sm:flex justify-center items-center gap-5'>
            <li className='group'><Link href='#about'><a className=''>About</a></Link>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-red-200 bg-gradient-to-r from-purple-500 to-pink-500 absolute'></div>
            </li>
            <li className='group'><Link href='#project'><a className=''>Project</a></Link>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-red-200 bg-gradient-to-r from-purple-500 to-pink-500 absolute'></div>
            </li>
            <li className='group'><Link href='#social'>
              <a className=''>Social</a></Link>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-red-200 bg-gradient-to-r from-purple-500 to-pink-500 absolute'></div>
            </li>
            <li className='group'><Link href='https://rabelcode.net'><a className=''>Profile</a></Link>
            <div className='h-[0.3rem] rounded-full w-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:w-8 bg-red-200 bg-gradient-to-r from-purple-500 to-pink-500 absolute'></div>
            </li>
          </ul>

        </div>

        <div>
            <Link href='/discord'><a className='bg-black hover:bg-blue-500 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 hover:shadow-xl hover:rounded-sm2 shadow-black py-2 rounded text-xs'>Join Family</a></Link>
          </div>
      </nav>
    </div>

  )
}