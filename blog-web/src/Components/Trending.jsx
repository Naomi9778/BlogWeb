import { useEffect, useState } from "react";
import { Badge } from "./Badge"
import axios from "axios";




export const Trending = () => {

    let [articles,setArticles] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DATA_BACKEND_ENDPOINT}/articles?tag=trending&per_page=4`).then((response) => {
            setArticles(response.data)
        });
    },[])

    const picture = "https://s3-alpha-sig.figma.com/img/e4e4/d40b/dc5bf5a2de00232ed3b7e18eadcbe03a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtgyYAYaOvPGbf-x9LL6T8cx8i5iVbZmjLhw7iR4GpYHq--V9T6Vdq2zSmZfc~pwc~Eeh5W5V0qVtyu4wGFLhy8JtjZ-L~OpF5YddX9jIHwX0BK-m0lZrGTsDxbbFZ-83cytm4341h3V0Vm3Y9njN0V4qVEEwf6sINOg2b765vm1J1-rYdgWBzLzhv41cqjM7iBaIfTOSyROMeV~q1twQI4ajYCaOwlCPWbPwDsmO1SiNOGlz9R0MlACdjyYjWJoBd24dC0RlXX~Gp8bw9GaTGdVv8-opcOUtaSodxLllmR-V2UVO2F3seXnXvrN0Jjs-SWhVh8bpMYI6lUupNYjtQ__"


    const postdata = [

        {

            category: 'Technology',
            title: 'Grid system for better Design User Interface',

            pic: picture
        },
        {

            category: 'Fashion',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',

            pic: picture
        },
        {

            category: 'Software',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',

            pic: picture
        },
        {

            category: 'Software',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            pic: picture
        }

    ]



    return (
        <div className="flex flex-col max-w-[1216px] gap-[30px] mx-auto mt-[100px] ">
            <p className="mt-10 text-2xl font-medium">Trending</p>
            <div className="flex  w-[1216px] mx-auto justify-between rounded-xl " >
                {articles.map((el) => {
                    return <div className=" justify-center bg-gray-300 max-w-[280px] h-[320px] rounded-xl relative">
                        <img className=" rounded-xl absolute w-full h-full object-cover object-center" src={el.social_image} alt="" />
                        <div className="absolute w-full h-full rounded-xl bg-[#00000080]"></div>
                        <div className=" flex flex-col justify-end h-full relative rounded-md p-10 gap-6">
                            <Badge className="flex justify-end" tag={el.tag_list[0]} style={true}/>
                            <h1 className="text-lg w-[230px] text-white font-semibold">{el.title}</h1>
                        </div>

                    </div>
                })}
            </div>
        </div>

    )
}