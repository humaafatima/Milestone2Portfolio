import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function Experience() {
    return <div className="bg-gray-950 h-screen w-screen">
        <Navbar/>
      <div className="flex no-wrap justify-between items-center px-8 py-4 gap-4">
        <div className="flex-column border-8 border-dashed border-blue-600 px-4 py-4 mr-15">
        <h1 className="text-blue-600 text-2xl text-left font-lato px-4 py-2">Professional Experience:</h1>

        <ol className="text-white font-lato list-disc px-4 py-2">
        July 26th, 2024 till date
        <br/>
<li>Teaching English in BTKes School</li>
<br/>
 	Feb 1, 2021 till 15th June, 2024
     <br/>
<li>Teaching English to Class 4 and 5 in Roots Millennium School</li>
<br/>

 	Jan 1, 2020 to Jan 28th, 2021
     <br/>
     <li>Taught English, Social Studies to class 6 in PECHS Girls School</li>
     <br/>

 	Nov 25, 2013 to October 2019
     <br/>
     <li>Worked as Copy Editor/Producer at International desk in Dawn news channel</li>
     <br/>

 	Aug 10, 2012 to 12 Nov, 2013
     <br/>
     <li>Worked as Sub editor at Express news website (www.express.pk)</li>
     <br/>

 	Feb 22, 2010 till April 30, 2011
     <br/>
     <li>Worked as Translator in The Express Tribune newspaper</li>
     <br/>

 	June 2008 to Feb 2010
     <br/>
<li>Worked as Sub-editor at The Financial Daily newspaper</li>
<br/>
</ol>
</div>
<div className="flex-column border-8 border-dashed border-blue-600 px-4 py-4">
    <h1 className="text-blue-600 text-2xl text-left font-lato px-4 py-4 mb-4 mr-15">Qualification:</h1>
    <br/>
    <ol className="text-white font-lato list-disc px-4 py-2">
    <li>MBA in Media Management from CBM University in 2009</li>
    <li>B-Com from Karachi University in 2006</li>
    <li>Done MFTL course from Roots Millennium School</li>
    </ol>
    </div>
    <div className="flex-column border-8 border-dashed border-blue-600 px-4 py-4">
    <h1 className="text-blue-600 text-2xl text-left font-lato px-4 py-4 mb-4 mr-15">Achievements:</h1>
    <br/>
    <ol className="text-white list-disc px-4 py-2">
     <li>Received Best Teacher award from Roots Millennium School</li>
     <li>Passed GIAIC Quarter 1-Typescript with 83 percentile, A grade</li>
    <li>Received Microsoft Innovative Education Expert award from Microsoft</li>
    <li>Scored 490 CEFR B2 Upper Intermediate level in British Council English Test</li>
    </ol>
    </div>
</div>
        </div>
        
    
}