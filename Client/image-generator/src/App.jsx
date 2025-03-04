
import { BrowserRouter,Link,Route,Router,Routes } from "react-router-dom"
import me from './assets/me.png'
import { Home,CreatePost } from "./pages"
function App() {
  
  

  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white  sm:px-8 py-4 border-b-[#e6ebf4]">
     <Link to="/">
     <img src={me} alt="logo" className="w-28 object-contain" />
     </Link>
     <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 mr-2 py-2 rounded-md">Create
     </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/create-post" element={<CreatePost/>}/>
  

  
</Routes>

    </main>

    </BrowserRouter>
   
  )
}

export default App
