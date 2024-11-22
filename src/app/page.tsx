"use client"
import Image from "next/image"
import profilepic from "@/assets/profilepic.jpg"
import Navbar from "@/components/Navbar"
export default function Home(){
  return ( <div className="bg-gray-950 h-screen w-screen">
<Navbar/>


<div className="flex w-1000 h-1000 justify-between place-items-center px-8 py-4 gap-4">
<div className="flex-row w-1/2">
<h1 className="text-blue-500 text-2xl text-bold text-left font-lato px-8 py-4 mb-4">HELLO and WELCOME</h1>
  <p className="text-white text-5xl text-bold font-lato text-left px-6 py-8 mb-4">I am <span className="font-light text-blue-500 ">Huma Fatima</span>, an English Teacher
    <br></br>
  by profession.
  <br></br>
  A freelance programmer and a web developer
  <br></br> 
  by choice.
  </p>
  </div>
  <div className="flex-row justify-end w=1/2">
    <Image src={profilepic} alt="profile" width="400" height="400" className="rounded-full w-3/4 drop-shadow-xl shadow-white"/>

  </div>
    
 </div>
  
  </div>
  )

    
      
}
