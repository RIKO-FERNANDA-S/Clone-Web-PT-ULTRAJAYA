import React from 'react'
import reportImg1 from '../../../../public/img/report1.jpg'
import reportImg2 from '../../../../public/img/report2.jpg'
import reportImg3 from '../../../../public/img/report3.jpg'
import Image from 'next/image'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
subsets: ['latin'],
weight: "400"
})


function Report() {
  return (
    <section className='h-max w-full flex flex-col py-32 gap-14'>
        <div className='w-full justify-center flex flex-col items-center'>
            <h1 className='w-max text-5xl tracking-widest font-sans text-[#9c8add] font-normal'>Laporan <span className='text-black'>Tahunan</span></h1>
            <div className='w-20 h-0.5 mt-6 bg-black'></div>
        </div>
        <div className='w-full flex gap-32 justify-center'>
            <div className='flex flex-col items-center'>
            <Image src={reportImg1} alt='imgReport' className='w-80 ' />
                <h1 className={`${roboto.className} text-2xl pt-7`}>Laporan Tahunan 2023</h1>
            </div>
            <div className='flex flex-col items-center'>
            <Image src={reportImg2} alt='imgReport' className='w-80 ' />
                <h1 className={`${roboto.className} text-2xl pt-7`}>Laporan Tahunan 2024</h1>
            </div>
            <div className='flex flex-col items-center'>
            <Image src={reportImg3} alt='imgReport' className='w-80 ' />
                <h1 className={`${roboto.className} text-2xl pt-7`}>Laporan Tahunan 2025</h1>
            </div>
        </div>
    </section>
  )
}

export default Report