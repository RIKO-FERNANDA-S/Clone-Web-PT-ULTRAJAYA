"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import Logo from "../../../../public/img/logo.png";
import IND from "../../../../public/img/indonesia.png";
import ENG from "../../../../public/img/united-kingdom.png";
import { ChevronDown } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  return (
    <main className="w-full h-max">
      <nav className="w-full h-24 flex justify-between items-center px-10 bg-linear-to-r from-[#c2eeff] via-[#82cceb] to-[#c2eeff]">
        <Link href="/">
        <Image src={Logo} alt="Logo" className="w-xl"></Image>
        </Link>
        <Link href="/" className="flex mr-11">
          <Image
            src={IND}
            alt="indonesia flag"
            className="w-10 h-max cursor-pointer "
          ></Image>
          {/* <Image src={ENG} alt='united kindom flag' className='w-8 h-max cursor-pointer'></Image> */}
        </Link>
      </nav>

      <div className="w-full h-max flex justify-center">
        <Link
          href="/"
          className="py-4 px-7 text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]"
        >
          <h1 className="text-sm font-medium">Beranda</h1>
        </Link>

        <div
          className="group/item py-4 px-7 flex items-center cursor-pointer text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]"
        >
          <div className=" flex items-center space-x-1.5 ">
            <h1 className="text-sm font-medium">Perusahaan</h1>
            <ChevronDown className="w-3 group-hover/item:rotate-180 transition-all" />
          </div>

          <div
            className={`group-hover/item:visible  invisible text-[#372286] absolute flex flex-col bg-[#83cde8e1] z-10 top-[9.5rem] w-72 left-[10.66rem] ${roboto.className}`}
          >
            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5">
                <h1>Sekilas Tentang Ultrajaya</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-0 w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Sambutan Presiden Direktur</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Komposisi Kepemilikan Saham</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Lembaga Penunjang Pasar Modal</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Asosiasi dan Entitas</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Riset, Pengembang & Pengawasan Mutu</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Teknologi</h1>
                </Link>
              </div>
            </div>

          <div className="group/subitem">
            <div className=" flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
              <h1>Organisasi</h1>
              <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
            </div>
            <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-16 w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Struktur Organisasi</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Komisaris</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Direktur</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Komite Audit</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Sekertaris Perusahaan</h1>
                </Link>
                
              </div>
          </div>

            <div className="group/subitem">
            <div className=" flex w-full justify-between hover:bg-white p-5">
              <h1>Karir</h1>
              <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
            </div>
            <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-32.5 w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Info Lowongan</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Penerimaan Karyawan</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Prosedur Kerja Praktek</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group/item py-4 px-7 text-[#372286] cursor-pointer hover:text-[#83CDE8] transition-all ease-in-out  border-r-[1px] border-solid border-[#afeaff]">
            <div className="flex items-center space-x-1.5 ">
              <h1 className="text-sm font-medium">Produk</h1>
              <ChevronDown className="w-3 group-hover/item:rotate-180 transition-all" />
            </div>

            <div className={`group-hover/item:visible invisible text-[#372286] absolute flex flex-col bg-[#83cde8e1] z-10 top-[9.5rem] w-72 left-[20.66rem] ${roboto.className}`}>
            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5">
                <h1>Susu Segar UHT</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-0 w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Ultra Milk Full Cream</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Ultra Milk Low Fat Source Calcium</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Ultra Milk Varian Rasa</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-y-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Ultra Mimi</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Organic Milk</h1>
                </Link>
              </div>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
                <h1>Minuman Teh UHT</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-16.5 w-72 h-max">
              <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Teh Kotak Jasmine Tea</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Teh Kotak Flavored Tea</h1>
                </Link>
              </div>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5 border-b-2 border-[#3b1da630]">
                <h1>Minuman Kesehatan UHT</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-[8.1rem] w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Ultra Sari Kacang Ijo</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Ultra Sari Asem Asli</h1>
                </Link>
              </div>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5">
                <h1>Krimer Kental Manis</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-48 w-72 h-max">
                <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Cap Sapi</h1>
                </Link>
              </div>
            </div>
            </div>
        </div>

        <Link href="/" className="py-4 px-7 text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]">
          <h1 className="text-sm font-medium">Tata Kelola Perusahaan</h1>
        </Link>

        <div className="group/item py-4 px-7 cursor-pointer text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]">
          <div className="flex items-center space-x-1.5">
          <h1 className="text-sm font-medium">Hubungan Investor</h1>
          <ChevronDown className="w-3 group-hover/item:-rotate-180 transition ease-out " />
          </div>

          <div className={`group-hover/item:visible invisible text-[#372286] absolute flex flex-col bg-[#83cde8e1] z-10 top-[9.5rem] w-72 left-[42.3rem] ${roboto.className}`}>
            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5">
                <h1>Prospek Pertumbuhan</h1>
              </Link>
            </div>

            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
                <h1>Laporan Tahunan</h1>
              </Link>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5 ">
                <h1>Informasi Keuangan</h1>
                <ChevronDown className="w-3 group-hover/subitem:-rotate-90 transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[18rem] top-32.5 w-72 h-max">
              <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Laporan Keuangan Tahunan Audit</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Laporan Keuangan Tengah Tahun</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Laporan Keuangan 3 Bulanan</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Iktisar Keuangan</h1>
                </Link>
              </div>
            </div>

            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
                <h1>RUPS</h1>
              </Link>
            </div>
            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5 ">
                <h1>Paparan Publik</h1>
              </Link>
            </div>
            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
                <h1>Laporan Keberlanjutan</h1>
              </Link>
            </div>
            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5">
                <h1>Informasi</h1>
              </Link>
            </div>

            </div>
        </div>

        <Link href="/" className="py-4 px-7 text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]">
          <h1 className="text-sm font-medium">CSR</h1>
        </Link>

        <Link href="/" className="py-4 px-7 text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff]">
          <h1 className="text-sm font-medium">Berita</h1>
        </Link>

        <div className="group/item py-4 px-7 cursor-pointer text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out border-r-[1px] border-solid border-[#afeaff] w-max">
        <div className="  flex cursor-pointer items-center space-x-1.5 ">
          <h1 className="text-sm font-medium">Kontak Kami</h1>
          <ChevronDown className="w-3 group-hover/item:-rotate-180 transition ease-out " />
        </div>

         <div className={`group-hover/item:visible invisible text-[#372286] absolute flex flex-col bg-[#83cde8e1] z-10 top-[9.5rem] w-72 md:left-[66.8rem] 2xl:left-[72.7rem] ${roboto.className}`}>
            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5">
                <h1>Pemasaran, Penjualan & Distribusi</h1>
              </Link>
            </div>

            <div className="group/subitem ">
              <Link href="/" className="flex w-full justify-between hover:bg-white p-5 border-y-2 border-[#3b1da630]">
                <h1>Hubungan Investor</h1>
              </Link>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5 ">
                <h1>Alamat Cabang Penjualan</h1>
                <ChevronDown className="w-3 group-hover/subitem:rotate-90  transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 left-[-18rem] top-32 w-72 h-max">
              <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Pulau Jawa</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Luar Pulau Jawa</h1>
                </Link>
              </div>
            </div>

            <div className="group/subitem ">
              <div className="flex w-full justify-between hover:bg-white p-5 ">
                <h1>Temukan Kami</h1>
                <ChevronDown className="w-3 group-hover/subitem:rotate-90  transition ease-out " />
              </div>
              <div className="group-hover/subitem:visible invisible absolute flex flex-col bg-[#83cde8e1] z-10 -left-[18rem] top-48 w-72 h-max">
              <Link href="/" className="hover:bg-white p-5.5">
                  <h1 className="text-sm font-medium">Official Store</h1>
                </Link>
                <Link href="/" className="hover:bg-white p-5.5 border-t-2 border-[#3b1da630]">
                  <h1 className="text-sm font-medium">Penawaran Istimewa</h1>
                </Link>
              </div>
            </div>
            </div>
        </div>

    {/* LAYANAN KONSUMEN */}
        <div className="group/item py-4 px-7 cursor-pointer text-[#372286] hover:text-[#83CDE8] transition-all ease-in-out "
        >
        <div className="flex items-center space-x-1.5">
          <h1 className="text-sm font-medium">Layanan Konsumen</h1>
          <ChevronDown className="w-3 group-hover/item:-rotate-180 transition ease-out " />        
        </div>

           <div className={`group-hover/item:visible invisible text-[#372286] absolute flex flex-col bg-[#83cde8e1] z-10 top-[9.5rem] w-max 2xl:w-72 left-[77rem] 2xl:left-[82.84rem] ${roboto.className}`}>
            
              <Link href="/" className="group/subitem flex w-full justify-between hover:bg-white p-5">
                <h1>Alamat dan Nomor Telepon</h1>
              </Link>
           
            
              <Link href="/" className="group/subitem flex w-full justify-between hover:bg-white p-5">
                <h1>Saran dan Pertanyaan</h1>
              </Link>
           

            
              <Link href="/" className="group/subitem flex w-full justify-between hover:bg-white p-5 border-t-2 border-[#3b1da630]">
                <h1>Pertanyaan Umum</h1>
              </Link>
           


            </div>
        </div>

      </div>
    </main>
  );
}

export default Navbar;
