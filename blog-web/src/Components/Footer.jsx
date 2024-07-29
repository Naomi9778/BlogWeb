import { Facebook } from "../assets/Facebook"
import { Instagram } from "../assets/Instagram"
import { Linkedin } from "../assets/LInkedin"
import { Logo } from "../assets/Logo"
import { Twitter } from "../assets/Twitter"

export const Footer = () => {

    return (
        <div className="bg-bgblack w-full py-[64px]"> 
            <div className="flex max-w-[1216px] justify-between mx-auto ">
            <div className="flex flex-col w-1/4 ">
                <div className="">
                    <p className="">About</p>
                    <p className="mt-4 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="mt-8">
                <p className="">Email : info@jstemplate.net</p>
                <p>Phone : 880 123 456 789</p>
                </div>
                </div>


            </div>
            <div className="w-2/4 flex flex-col items-center ">
                <div className="text-start">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
                </div>
            </div>
            <div className="flex justify-start w-1/4"  >
                <div className="flex gap-6">
                <p><Facebook/></p>
                <p><Twitter/></p>
                <p><Instagram/></p>
                <p><Linkedin/></p>
                </div>
            </div>

        </div>
        <div className="flex justify-between items-center max-w-[1216px] mx-auto border-t-[1px] border-black mt-[25px] py-[32px]">
            <div><Logo/></div>
            <div className="flex gap-4"> 
                <p>Terms of Use</p>
                <span className="pl-[1px] h-[24px] bg-black"></span>
                <p>Privacy Policy</p>
                <span className="pl-[1px] h-[24px] bg-black"></span>
                <p>Cookie Policy</p>
            </div>
        </div>
        </div>
    )
} 