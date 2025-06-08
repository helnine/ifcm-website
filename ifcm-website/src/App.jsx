import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import About from "@/pages/About"
import Home from "@/pages/Home"
import Clients from "@/pages/Clients"
import Suppliers from "@/pages/Suppliers"
import Services from "@/pages/Services"
import Career from "@/pages/Career"
import Contact from "@/pages/Contact"
import ResumeForm from "@/pages/ResumeForm"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<ResumeForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App