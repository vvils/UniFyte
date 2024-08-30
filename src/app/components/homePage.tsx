"use client"
import React, {useState} from "react"
import NavBar from "./navBar"
import Link from "next/link"

export default function Home() {
    //Testing Purposes:
    const [petitionsLinks, setPetitionLinks] = useState([1,2])

    return(
        <main>
            <NavBar/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center row-auto">
                    <p className="text-6xl mt-28">Empower Your Voice, Shape Your Campus</p>
                    <p className="text-2xl mt-4">5,000 people are taking action</p>
                    <Link href = "/start-a-petition" className="text-2xl mt-4 rounded-xl
                    before:ease relative h-12 w-40 overflow-hidden
                    border border-white shadow-2xl before:absolute
                    before:left-0 before:-ml-2 before:h-48 
                    before:w-48 before:origin-top-right 
                    before:-translate-x-full before:translate-y-12
                    before:-rotate-90 before:bg-red-900 
                    before:transition-all before:duration-300 
                    hover:text-white hover:shadow-white 
                    hover:before:-rotate-180">Start Petition
                    </Link>
                </div>
            </div>

            <div className ="max-w-screen-xl px-4 py-3 mx-auto">
                <p className="text-xl md:font-bold">What's Happening on Campus</p>
                {petitionsLinks.map((petition, index) => (
                    <PetitionCard key={index} />
                ))}
                
            </div>

        </main>
    )
}

function PetitionCard(){
    return (
        <Link href="#" className="border-2 rounded-xl p-6 mt-4 h-64 flex">
            <div className='flex-grow'>
                <h4 className="text-2xl md:font-bold">The title of the petition is going to go here</h4>
                <p className="text-base pt-4">The text is going to go here</p>
            </div>
            
            <div className="flex-shrink-0 ml-4">
                <img src='./favicon.ico' alt="Image not found" className="w-48 h-48 object-cover rounded-xl" />
            </div>
        </Link>
    )
}