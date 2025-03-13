"use client"
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../app/components/layouts/hero"))
const Navbar = dynamic(() => import("../app/components/layouts/navbar"),) 
const Welcome = dynamic(() => import("../app/components/layouts/welcome"))


export default function Home() {
  return (
    <main className="h-max">
      <Navbar />
      <Hero/>
      <Welcome/>
    </main>
  );
}
