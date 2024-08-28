"use client"
import {useState} from 'react'
import NavBar from '../components/navBar'

export default function PetitionPage(){
    const [questions, setQuestion] = useState([])
    return(
        <main className="min-h-screen justify-between p-4">
            <NavBar/>
            <div className='flex justify-center mt-16'>
                <div className='flex flex-col items-center row-auto'>
                    <h1 className='md:font-bold text-5xl'>What University do you go to?</h1>
                    <h1 className= "text-2xl mt-8">Connect with people near you</h1>
        
                    <div className="border-2 text-2xl p-2 w-96 rounded-xl mt-12">
                        Enter a University
                    </div>

                    <div className="flex-row">
                        <button className="border-2 rounded-xl mt-12 text-xl p-4"> Back</button>
                        <button className="bg-blue-300 border-2 rounded-xl ml-4 mt-12 text-xl p-4"> Continue</button>
                    </div>
                </div>
                
            </div>
            
        </main>
    )
}

