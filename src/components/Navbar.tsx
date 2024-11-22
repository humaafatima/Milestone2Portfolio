"use client"
import Link from "next/link"
export default function Navbar (){
return <div>
  <nav className="sticky flex justify-center items-center px-4 py-4 bg-gray-900">
  <ul className="flex gap-4 items-right px-4 py-4 font-serif font-bold text-xl text-white">
        <li> <Link href='/' className=" hover:text-blue-500">Home</Link></li>
        <li><Link href='/Experience' className=" hover:text-blue-500">Experience</Link></li>
        <li><Link href='/About' className=" hover:text-blue-500">About</Link></li>
        <li><Link href='/Blogs' className=" hover:text-blue-500">Blogs</Link></li>
        <li><Link href='/Contact' className=" hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  </div>

}