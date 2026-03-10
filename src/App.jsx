import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-gray-200">
        <Navbar />
        <div className="px-6 md:px-20 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;