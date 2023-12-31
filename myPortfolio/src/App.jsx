import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import "./styles/App.css"


function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Project/:id" element={<ProjectDisplay/>} />
        <Route path="/Experience" element={<Experience/>} />
      </Routes>
      <Footer/>
    </Router>

      
    </>
  )
}

export default App
