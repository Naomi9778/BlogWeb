import { useState } from "react"
import { BackArrow } from "../assets/BackArrow"
import { ForwardArrow } from "../assets/ForwardArrow"
import { Badge } from "./Badge"




export const Carousel = () => {



    const pic1 = "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__"
    const pic2 = "https://s3-alpha-sig.figma.com/img/dbae/ead3/16e4297057a78fcd78323914d00b0bf8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emsUOyNANIn4vx~jy2mBFseYlxFrJp4wB6zloINxG3mEhPTaKCBhCHfWnX5Jq5i8xeYBR-TeRUZp-mkWno5NL3tfePAS6OMpBGQV0kF90ipPl-N~ygVlLDDwzHUlzi8-UCp~-kUpv2AzpJd~RE6Au5khZHWHlroNjSuYMoef~N4ea~bREqcaYzM1n7YbPZXO624J48UczLLrIOhN3L0168do4b5ZGLXbRktRzR90TO~vN1kBNpgrP0w0Sd~ETBb0rAwmkqo5Rmse5D1NdA87piE6cW3TLsxkpicClfXg6QLFmPsaPJPyYOcG7DKTxP02~AbU1LGY13~5PbHUfjzGZw__"
    const pic3 = "https://s3-alpha-sig.figma.com/img/e4e4/d40b/dc5bf5a2de00232ed3b7e18eadcbe03a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtgyYAYaOvPGbf-x9LL6T8cx8i5iVbZmjLhw7iR4GpYHq--V9T6Vdq2zSmZfc~pwc~Eeh5W5V0qVtyu4wGFLhy8JtjZ-L~OpF5YddX9jIHwX0BK-m0lZrGTsDxbbFZ-83cytm4341h3V0Vm3Y9njN0V4qVEEwf6sINOg2b765vm1J1-rYdgWBzLzhv41cqjM7iBaIfTOSyROMeV~q1twQI4ajYCaOwlCPWbPwDsmO1SiNOGlz9R0MlACdjyYjWJoBd24dC0RlXX~Gp8bw9GaTGdVv8-opcOUtaSodxLllmR-V2UVO2F3seXnXvrN0Jjs-SWhVh8bpMYI6lUupNYjtQ__"

    const mockData = [
        {
            pic: pic1,
            category: 'Technology',
            title: 'Grid system for better Design User Interface',
            date: 'August 20, 2022',
        },
        {
            pic: pic2,
            category: 'Fashion',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            date: 'August 20, 2022',
        },
        {
            pic: pic3,
            category: 'Software',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            date: 'August 20, 2022',
        }
    ];
    const [images, setImage] = useState(0)
    const [current, setCurrent] = useState(mockData)


    const backClick = () => {
        if (images > 0) {
            setImage(images - 1)
        }
    }
    const forwardClick = () => {
        if (images < mockData.length - 1) {
            setImage(images + 1)
        }

    }



    return (
        <div className=" mx-auto">

            <div className="flex w-[1216px] mx-auto overflow-hidden"> {
                mockData.map((el) => {
                    return <div className="flex items-end min-w-[1216px] h-[600px] relative duration-300" style={{transform: `translateX(-${1216 * (images) + 'px'})`}}>
                        <img className="absolute top-0 left-0 w-[1216px] h-[600px] object-cover rounded-xl" src={el.pic} alt="" />
                        <div className=" flex flex-col justify-center relative z-10 bg-white w-[518px] ml-3 mb-3 rounded-md gap-6 p-10">
                            <Badge tag={el.category} style={true}/>
                            <h1 className="text-2xl">{el.title}</h1>
                            <p>{el.date}</p>
                        </div>Ï

                    </div>
                })
            }

            </div>
            <div className="flex space-x-2 justify-end mt-2 items">
                <button className=" flex w-10 h-10 border-[1px] border-black items-center justify-center rounded-md " onClick={backClick} ><BackArrow /></button>
                <button className=" flex w-10 h-10 border-[1px] border-black items-center justify-center rounded-md " onClick={forwardClick}><ForwardArrow /></button>
            </div>

        </div>
    )
}