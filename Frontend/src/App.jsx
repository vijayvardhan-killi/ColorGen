import Home from "./pages/Home"
import Generate from "./pages/Generate";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/generate" element={<Generate />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      </main>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
