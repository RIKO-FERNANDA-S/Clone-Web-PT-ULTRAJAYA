import React from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "300",
});

function Footer() {
  return (
    <footer className='w-full h-12 flex justify-center items-center bg-[#1A1A1A]'>
      <p className={`${openSans.className} text-[#8cd9f77a]`}>©2025 P.T. ULTRAJAYA MILK INDUSTRY & TRADING COMPANY, TBK. All rights reserved.</p>
    </footer>
  )
}

export default Footer