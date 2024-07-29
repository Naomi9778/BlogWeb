import { Link } from "react-router-dom"
import { Logo } from "../assets/Logo"
import { SearchIcon } from "../assets/SearchIcon"

export const Navbar = () => {


    return (
        <div className="flex justify-center max-w-[1217px] mx-auto gap-[10px]  py-[32px] items-center">
            <div className="flex flex-start gap=[118px]">
               <Link to="/"><Logo /></Link> 
                <div className="flex items-center gap-[21px]">
                <div className="flex w-[667px] justify-center items-center gap-[40px]">
                    <Link to="/" className="flex items-center gap-[4px]">Home</Link>
                    <Link to="/Allblog" className="flex items-center gap-[4px]">Blog</Link>
                    <Link to="/Contact" className="flex items-center gap-[4px]">Contact</Link>
                </div>
                <div className="flex items-center gap-10 bg-gray-100 rounded px-2">
                    <input className="flex w-[166px] p-2 pl-4 items-center gap-3 bg-gray-100" placeholder="Search" />
                    <SearchIcon />
                </div>
                </div>
            </div>
        </div>
    )
}