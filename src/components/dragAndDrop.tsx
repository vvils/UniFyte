"use client";

import React, { DragEvent, useState } from "react";
import Image from "next/image";


export default function DragAndDrop({ ImageUpload }: { ImageUpload: (url: string | null) => void }) {
  const [dragOver, setDragOver] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  //Repositioning the Image
  const [position, setPosition] = useState({x: 0, y:0})
  
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
    setDropped(false);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    setDropped(false);
  };

  //Handles when the file is dropped into the container
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    setDropped(true);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFile(file)
      const fileURL = URL.createObjectURL(file)
      setPreviewImage(fileURL)
      console.log("This was the dropped file", file);
    }
  };

  //Handles when the File is being uploaded and sets the preview Image to the uploaded file URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile)
      setPreviewImage(fileURL)
      ImageUpload(fileURL)
      console.log("This was the uploaded file", selectedFile);
    }
  };

  //Handles when the Upload File is clicked
  const handleClickUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <main className="flex flex-col border-2 border-dashed border-gray-800 w-[600px] h-[400px] mt-8 rounded-2xl">
      <div className="flex flex-col w-full h-full items-center">
        <form>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="flex flex-col w-[600px] h-[400px] border-gray-700 items-center justify-center"
          >

            {previewImage ? (
              <div className="relative w-full h-full">
                <Image
                src={previewImage}
                alt="Dropped file preview"
                className="w-full h-full object-cover rounded-2xl"
                width={600}
                height={400}/>
                
                <button onClick={() => {setPreviewImage(null), ImageUpload(null)}}
                className="absolute top-4 right-4 text-2xl rounded-2xl border-2 border-red-500 text-red-500 pl-4 pr-4 pt-2 pb-2 bg-gray-200 hover:border-3"> 
                x
                </button>
              </div>
             ):(
            <>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <button
              className="border-2 border-orange-300 p-2 rounded-xl text-orange-300 font-bold hover:bg-gray-200"
              onClick={handleClickUpload}
            >
              Upload An Image
            </button>
             </>)}   
          </div>
        </form>
      </div>
    </main>
  );
}