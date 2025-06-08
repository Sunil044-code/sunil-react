import { createContext, useState } from "react";


export const AuthContext=createContext()


export default function AuthContextProvider({children}){

    const[isLogged,setIsLogged]=useState(false);
    const Login=()=>{
        setIsLogged(true)
       
    }
    const LogOut=()=>{
        setIsLogged(false)
       
    }


    return <div>
        <AuthContext.Provider value={{isLogged,Login,LogOut}} >{children}</AuthContext.Provider>
    </div>

}