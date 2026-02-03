import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import Details from "./pages/Details/Details"


function App() {

  return (
      <div className="">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
