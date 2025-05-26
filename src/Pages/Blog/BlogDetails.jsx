import { useParams } from "react-router"

export default function BlogDetails(){
    const {blogName}=useParams()
    return(
        <div>
              <h1>Blogs</h1>
            <p>{blogName}</p>
        </div>
    )
}