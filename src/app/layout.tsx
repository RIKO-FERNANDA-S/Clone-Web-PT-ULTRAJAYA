import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google"

export const metadata: Metadata = {
  title: "Clone P.T. ULTRAJAYA MILK INDUSTRY & TRENDING COMPANY TBK",
  description: "WEBSITE CLONE BY RIKO FERNANDA S.",
  icons: "/img/logoTab.png",
};

const poppins = Poppins({
  subsets:['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <body
        className={` antialiased ${poppins.className} h-max`}
      >
        {children}
        </body>
    </html>
  );
}
