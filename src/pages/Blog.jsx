import {Link,useLoaderData} from "react-router-dom"

const Blog = () => {

    const {posts} = useLoaderData()
    
    return (
        <ul>
            {posts.length > 0 ?(  
                posts.map((element)=>(
                    <li key={element.id}>
                        <Link to={`/blog/${element.id}`}>{element.id}--{element.title}</Link>
                    </li>
                ))
            ):(
                <li>No blogs found</li>
            )
            }
        </ul>
    )
 }


 export default Blog

export const loaderBlog = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok)
        throw {
      status:res.status,
      statusText: "No encontrado"
        }

    const posts = await res.json()

    return {posts}

 }