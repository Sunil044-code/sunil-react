import {Route,Routes} from 'react-router'
import { lazy } from 'react'
import './App.css'
const BlogDetails=lazy(()=>import('./Pages/Blog/BlogDetails'))
const Home =lazy(()=>import('./Pages/Home'))
const BlogPage=lazy(()=> import('./Pages/Blog'))
const UserBlog=lazy(()=>import('./Pages/UserBlog'))
const Login=lazy(()=>import('./Pages/Login'))
function App() {

  return (
  
      <div className='bg-green-100 p-4 rounded-xl'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/blog_details/:blogName' element={<BlogDetails/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/userBlog' element={<UserBlog/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
        </div>
      
  )
}

export default App
