import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Image from "next/image"
import twitter from "@/app/assets/twitter.png"
import linkedinicon from "@/app/assets/linkedinicon.svg"
import discord from "@/app/assets/discord.png"
import gmail from "@/app/assets/gmail.svg"
import github from "@/app/assets/github.svg"

export default function Contact() {
    return (
    <div className="bg-gray-950 h-screen w-screen">
       <Navbar/>
       <br/>
       <br/>
       <div className="text-white font-serif text-2xl text-center">
       Connect with me: 
       <br/>
       <br/>
        <hr className="borderwidth-2px border-blue-500"></hr>
        <br/>
        </div>
        <br/>
    
<div className="flex-column justify-center items-center px-2 py-2">
<h1 className="text-white text-1xl text-center">Follow me on Twitter</h1>
    <div className="flex px-6 justify-center">
<Image src={twitter} alt="twitterId" width="50" height="50" className="w-50 h-50 rounded-full border-blue-500 py-6"></Image>
    </div> 
    
    <h1 className="text-white text-1xl text-center">Follow me on Discord</h1>
    <div className="flex px-6 justify-center">
        <Image src={discord} alt="discord Id" width="50" height="50" className="w-50 h-50 rounded-full border-blue-500 py-6">
            
        </Image>
    </div>
    <h1 className="text-white text-1xl text-center">Connect with me on Linkedin</h1>
    <div className="flex px-6 justify-center">
    <a href='https://www.linkedin.com/in/huma-fatima-363036323/' target="_blank">
        <Image src={linkedinicon} alt="linkedin Id" width="50" height="50" className="w-50 h-50 rounded-full border-blue-500 py-6">
            
        </Image>
        </a>
    </div>
    <h1 className="text-white text1xl text-center">Email me at</h1>
    <div className="flex px-6 justify-center">
    <a href='https://myaccount.google.com/?hl=en&authuser=1&utm_source=OGB&utm_medium=act&gar=WzEyMF0&sl=true' target="_blank">
        <Image src={gmail} alt="gmail Id" width="50" height="50" className="w-50 h-50 rounded-full border-blue-500 py-6">
            
        </Image>
        </a>
    </div>
    <h1 className="text-white text-1xl text-center">Visit my repositroies</h1>
    <div className="flex px-6 justify-center">
    <a href='https://github.com/humaafatima' target="_blank">
        <Image src={github} alt="github Id" width="50" height="50" className="w-50 h-50 border-b-blue-500 rounded-full border-6 border-blue-500 py-6">
            
        </Image>
        </a>
        </div>
    </div>
    </div>
    
    )
}
