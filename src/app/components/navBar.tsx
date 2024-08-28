import React from "react";
import Link from 'next/link'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function NavBar(){
    return(
        <nav>
            <div className="max-w-screen-xl px-4 py-3 mx-auto border-b-2 flex items-center justify-between">
                <div>
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/" className="hover:underline text-xl">Home</Link>
                        </li>
                        <li>
                            <Link href="/start-a-petition" className="hover:underline text-xl" aria-current="page">Start Petition</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline text-xl">My Petitions</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline text-xl">Browse</Link>
                        </li>
                    </ul>
                </div>

                <div className="ml-auto">
                    <button className="text-xl bg-blue-500 text-white py-2 px-4 mr-4 rounded hover:bg-blue-600">
                        Search
                    </button>

                    <Profile/>
                </div>
            </div>

        </nav>
    )

    function Profile(){
        return(
            <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Profile
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit">Settings</DropdownItem>
              <DropdownItem key="Log out" className="text-danger" color="danger">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )
    }
}