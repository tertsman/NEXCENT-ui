import About from "./component/About"
import Blog from "./component/Blog"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import NewSletter from "./component/NewSletter"
import Product from "./component/Product"
import Service from "./component/Service"

function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <About/>
     <Product/>
     <Blog/>
     <NewSletter/>
     <Footer/>
    </>
  )
}

export default App
