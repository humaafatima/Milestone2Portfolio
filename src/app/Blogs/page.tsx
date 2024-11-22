 "use client"
import Link from "next/link"
import Image from "next/image"
import callcenter from "@/assets/callcenter.jpg"
import vegetation from "@/assets/vegetation.jpg"
import Navbar from "@/components/Navbar"

export default function Blogs() {
    return <div className="bg-gray-950 h-screen relative">
        <Navbar/>
        <br/>
        <h1 className="text-4xl font-bold font-lato text-center text-blue-500">Blogs</h1>
        <br/>
        <p className="text-white text-2xl font-lato text-center">I have written articles and blogs for different newspapaers and magazines. Here are some links of my blogs: </p>
        <br/>
        <div className="flex gap-4 font-lato justify-center items-center relative py-5">
        
            
        <br/>
       
        <br/>
<div className="flex text-white text-center">
    <a href='http://tribune.com.pk/story/14739/the-call-centre-culture/' target="_blank"> 
    <Image src={callcenter} alt="callcenter" width="500" height="500" className="border-blue-600 border-8"></Image>
    Call Center Culture
    </a>
    </div>
    <br/>
    <br/>
    <div className="flex text-white text-center">
    <a href='http://tribune.com.pk/story/25331/add-some-iron-to-your-diet/' target="_blank"> 
    <Image src={vegetation} alt="vegetation" width="500" height="500" className="border-blue-600 border-8"></Image>
    Vegetation from Sewerage Water
    </a>
    <div>
    </div>
    <br/>
</div>
</div>
    </div>
    
}