import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
