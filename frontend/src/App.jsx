import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from "./components/NavBar";
import "./css/App.css"; // Assuming you have a CSS file for styling the App component



function App() {
  
  
  return (
    <div>
    <NavBar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
  )  
}

export default App
