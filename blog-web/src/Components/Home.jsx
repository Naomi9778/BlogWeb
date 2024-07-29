import { Trending } from "./Trending"
import { Carousel } from "./Carousel"
import { AllBlog } from "./AllBlog"
import { Test } from "./Test"
import { useEffect, useState } from "react"
import axios from "axios"


export const Home = () => {

    let [articles,setArticles] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DATA_BACKEND_ENDPOINT}/articles`).then((response) => {
            setArticles(response.data)
        });
    },[])

    



    return <div> 
     

        <Carousel/>
        <Trending />
        <AllBlog articles={articles}/>
        {/* <Test/> */}
        
    </div>
}