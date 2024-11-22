import Link from "next/link"
import Navbar from "@/app/components/Navbar"
export default function About() {
    return ( <div className="bg-gray-950 h-screen w-screen">
        <Navbar/>
        <h1 className="text-blue-500 text-2xl text-center font-lato px-6 py-4 mb-4">A brief introduction about <span className="text-light">myself</span></h1>
  <p className="text-white text-2xl font-lato text-center px-4 py-4 mb-4">I am a student at Governor House, IT initiative (GIAIC). I have gained expertise 
    <br/>
  in HTML, CSS, Javascript and Typescript languages. 
  <br/>
 Currently, I am studying Nextjs and Tailwindcss and honing my skills as a web developer.
 <br/>
 With my zeal, I am moving forward in my journey of software and web development. 
 </p>
    </div>
    )
}