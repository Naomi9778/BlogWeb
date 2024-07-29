import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Details = () => {
const {id} =useParams()



let [articles,setArticles] = useState();

useEffect(()=>{
    axios.get(`${process.env.REACT_APP_DATA_BACKEND_ENDPOINT}/articles/${id}`).then((response)=> {
        setArticles(response.data)
    })
},[])

const markup = { __html: articles?.body_html}



    return <div>
    {articles && <div className="w-[800px]">{articles.title}</div>}
    <div dangerouslySetInnerHTML={markup}/>
</div>
}