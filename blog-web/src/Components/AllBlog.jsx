import { useEffect, useState } from "react"
import { Badge } from "./Badge"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const pic1 = "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kjp9eAj2oxrH5qNeGOl0m95PEXix407MYB29i6rs7PjZP6i1Iig9b3peSsktRJsFz7ODPMUMgTq7TXT94NiGIqgv2oXWIMqVkxwpyAfRng-RhwmRKRokEN5E69LnCDv5-20y7nykOfBEQNtHcayQqKkMFKrBz~gIgbOEwW4JJO~3dvIWbtoL7JW10sprr8J8FDHK29IWp2Eaj8nn2aGJalnNwPWXCWjjZxVQUOd8mXTf7n2-ib3I~IBzjXhzdRvQyQes~LBNu7jRABuOI6iQlZJ77JkK66HvknyPFKTDvp-yWE~ZYgJRJwe56UiCa9tH~u4suX2jTkGUioq~v21Yuw__"

const postdata = [

    {
        pic: pic1,
        category: 'Technology',
        title: 'Grid system for better Design User Interface',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Fashion',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Software',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        title: '',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Technology',
        title: 'Grid system for better Design User Interface',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Fashion',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Software',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        title: '',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Technology',
        title: 'Grid system for better Design User Interface',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Fashion',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        date: 'August 20, 2022',
    },
    {
        pic: pic1,
        category: 'Software',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        title: '',
        date: 'August 20, 2022',
    },

]

const PostCard = ({pic, tag,title, date, id}) => {
    return <Link to={`/blog/${id}`} className="flex rounded-xl flex-col mx-auto p-4 w-full h-full gap-4 border-[1px] border-bgray">
       <img className="object-center object-cover flex justify-center items-center w-full h-[26vh] rounded-xl" src={pic}></img>
        <div className="flex flex-col items-start gap-4 ">
            <Badge tag={tag} style={false}/>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-tgray ">{date}</p>
        </div>
    </Link>

    }

export const AllBlog = () => {

    let [articles,setArticles] = useState([])

    const navigate = useNavigate();
    
    const HandlerClickPost = (id) => {
        navigate(`${id}`)
    }


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DATA_BACKEND_ENDPOINT}/articles`).then((response) => {
            setArticles(response.data)
        });
    },[])

    return <div className="mx-auto max-w-[1216px] mt-[100px] ">

        <div>
            <div className=" text-2xl font-medium">All Blog Post</div>
            <div className="justify-between flex my-8">
                <div className="flex gap-6">
                    <p>All</p>
                    <p>Design</p>
                    <p>Travel</p>
                    <p>Fasion</p>
                    <p>Technology</p>
                    <p>Branding</p>
                </div>
                <div className="">View All</div>
            </div>
            
        </div>
        <div className="mx-auto grid grid-cols-3 gap-[20px] w-fit"> {
            articles.map((el) =>{
                return <PostCard onClick={() => HandlerClickPost(articles.id)} pic={el.social_image} tag={el.tag_list[0]} title={el.title} date={el.published_at} id={el.id}/>
            } )
            }
            
            </div>
     
       
    </div>
}