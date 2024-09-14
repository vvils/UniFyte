"use client"

import React, {DragEvent, useState} from 'react';

export default function DragAndDrop(){
    const [dragOver, setDragOver] = useState(false)
    const [drapped, setDropped] = useState(false)

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(true)
        setDropped(false)
    }

    const handleDragLeave = (e:DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(false)
        setDropped(false)
    }

    const handleDrop = (e:DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(false)
        setDropped(true)


        if(e.dataTransfer.files && e.dataTransfer.files[0]){
            const file = e.dataTransfer.files[0]
            console.log("This was the dropped file", file)
        }
    }

    return(
        <main className="flex flex-col border-2 border-dashed border-gray-800 w-[700px] h-[500px] p-[16px] mt-8">
            <div className="flex flex-col w-full h-full items-center">
                <form>
                    <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="flex w-full h-[200px] border-dashed border-gray-700 items-center justify-center">
                        <p>Drag your image here</p>
                    </div>
                    <button className="border-2 border-orange-300 p-2 rounded-xl text-orange-300 font-bold hover:bg-gray-200">
                        Upload An Image
                    </button>
                </form>
            </div>
        </main>
    )

}