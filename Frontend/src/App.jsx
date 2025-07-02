import Home from "./pages/Home"
import Generate from "./pages/generate";

import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}Route/>
      <Route path="/generate" element={<Generate />}Route/>
    </Routes>
  )
}

export default App
