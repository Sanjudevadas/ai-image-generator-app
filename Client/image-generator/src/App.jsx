
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
    </header>

    </BrowserRouter>
   
  )
}

export default App
