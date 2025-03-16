import React from "react";
import Image from "next/image";
import ImgProduct from "../../../../public/img/contact1.jpg";
import ImgCS from "../../../../public/img/contactCS.jpg";
import { ChevronRight, Phone, Mail } from "lucide-react";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function CS() {
  return (
    <main
      className={`w-full h-max flex justify-evenly py-20 border-t-[1px] border-[#8ca9df56]  ${openSans.className}`}
    >
      <div className="p-1.5 w-max h-max rounded-2xl border-2 border-[#8cd8f7]">
        <Image
          src={ImgProduct}
          alt="product"
          className="w-96 h-auto rounded-2xl"
        />
      </div>

      <div>
        <h1 className={`uppercase text-[#2B5EBA] text-2xl ${roboto.className}`}>
          Website Komersial
        </h1>
        <div className="w-10 h-1 bg-[#2B5EBA] mt-1.5"></div>
        <div className="space-y-4 mt-8 text-[#616161]">
          <div className="flex gap-4">
            <ChevronRight className="w-4" /> <h1>Mymilk</h1>
          </div>
          <div className="flex gap-4">
            <ChevronRight className="w-4" /> <h1>Teh Kotak</h1>
          </div>
          <div className="flex gap-4">
            <ChevronRight className="w-4" /> <h1>Sari Kacang Ijo</h1>
          </div>
          <div className="flex gap-4">
            <ChevronRight className="w-4" /> <h1>Icownic Patch</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className={`uppercase text-[#2B5EBA] text-2xl ${roboto.className}`}>
          Layanan Konsumen
        </h1>
        <div className="w-10 h-1 bg-[#2B5EBA] mt-1.5"></div>
        <div className="flex mt-8 gap-7">
          <div className="w-max h-max">
            <Image
              src={ImgCS}
              alt="cs"
              className="rounded-full w-32 h-auto"
            ></Image>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex gap-2 text-[#616161]">
                <Phone className="w-4" />
                <h1>Hotline Konsumen</h1>
              </div>
              <div className={`${roboto.className}`}>
              <h1 className="text-2xl">0 800 11 ULTRA</h1>
              <h1 className="text-2xl">0 800 11 85872</h1>
              </div>
            </div>
            <div className="flex gap-2 text-[#616161]">
              <Mail className="w-4" />
              <h1>customer_care@ultrajaya.co.id</h1>
            </div>
            <div>
              <h1 className="text-[#616161]">OFFICIAL SMS (NOREPLY)</h1>
              <h2 className={`${roboto.className} text-2xl`}>+62-899-38-85872</h2>
              <p className="text-xs w-80 text-[#616161]">
                *nomor ini hanya dipergunakan oleh P.T. Ultrajaya Milk Industry
                & Trading Company, Tbk. untuk menghubungi konsumen via SMS dan
                tidak berlaku sebaliknya. Customer Care hanya dapat dihubungi
                via telepon di nomor 0-800-11-85872
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CS;
