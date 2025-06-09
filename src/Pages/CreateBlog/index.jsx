import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export default function CreateBlog(){
    
        const{logOut}=useContext(AuthContext)


    const logOutHandler=()=>{
        localStorage.removeItem('token')
        logOut()
    }
    return (
        <div>
            <p>create your blogs</p>
            <button type="button"
             className="w-fit px-2 py-1 rounded-lg bg-red-600 text-white cursor-pointer" 
             onClick={logOutHandler}>LogOut</button>
        </div>
    )
}