import { useNavigate } from "react-router";


export default function Home() {
    const navigate =useNavigate()
  return (
    <div>
      <div class="flex justify-end p-4 bg-gray-100">
  <button class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointers" onClick={()=>navigate('/login')}>
    Login 
  </button>
</div>

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6 bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Blogs</h1>
        <h2 className="text-lg text-gray-600 ">Free blog site to create and read</h2>
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          onClick={() => {
            navigate('/blog');
          } }
        >
          Click to read Blogs
        </button>
      </div>
    </div>




    </div>
  );
}
