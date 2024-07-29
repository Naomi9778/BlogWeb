import React from "react"
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/Footer"

export const MainLayout = ({children}) => {
 return (
    <div className="flex flex-col min-h-screen gap-[100px]">
        <div className="max-w-[1216px] min-w-[1216px] m-auto flex flex-col gap-[100px] flex-grow">
            <Navbar/>
            {children}
            
        </div>
        <Footer/>
    </div>
 )
}