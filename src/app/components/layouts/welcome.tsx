"use client"
import React from 'react'
import { Video } from '../fragments/video'

import { Roboto, Open_Sans } from "next/font/google";
import Link from 'next/link';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});


function Welcome() {
  return (
    <main className='bgWelcome w-full h-[80vh] flex space-x-3'>
        <article className={`w-1/2 py-8 px-10  ${openSans.className} space-y-5 mt-8`}>
            <h1 className='text-5xl font-light text-black tracking-widest'>Selamat datang di <span className='text-[#9c8add]'>ULTRAJAYA</span></h1>
            <div className='w-10 h-[2.2px] bg-black'></div>
            <div className='leading-7 space-y-5 text-black text-base font-extralight'>
            <p className=''>Pelopor produsen susu cair segar, minuman ringan, dan juga beberapa minuman kesehatan yang diproduksi dengan UHT Teknologi dan dikemas secara aseptik. Kami pun memproduksi dengan menggunakan bahan baku terbaik dan berkualitas tinggi dari alam yang diproses dengan teknologi termodern di Asia serta didukung dengan lingkungan hiegienis. Kesemuanya kami persembahkan 2 demi kebaikan keluarga Indonesia.</p>
            <p className=' '>Dan hingga kini, brand unggulan kami, UltraMilk, masih tetap unggul di antara segmen susu cair, seperti halnya juga Teh Kotak unggul di varian minuman siap saji dalam kemasan karton.</p>
            </div>
        <Link href="/" className={`mt-8 ${openSans.className} px-10 py-5 text-lg font-light btn btn-primary rounded-full`}>
          <h1>Selengkapnya</h1>
        </Link>
        </article>
        <article className='w-1/2 h-full flex items-center'>
            <Video/>
        </article>
    </main>
  )
}

export default Welcome