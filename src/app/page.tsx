"use client"
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../app/components/layouts/hero"))
const Navbar = dynamic(() => import("../app/components/layouts/navbar"),) 
const Welcome = dynamic(() => import("../app/components/layouts/welcome"))
const Report = dynamic(() => import("../app/components/layouts/report"))
const CS = dynamic(() => import("../app/components/layouts/cs"))
const Footer = dynamic(() => import("../app/components/layouts/footer"))

export default function Home() {
  return (
    <main className="h-max text-black">
      <Navbar />
      <Hero/>
      <Welcome/>
      <Report/>
      <CS/>
      <Footer/>
    </main>
  );
}
