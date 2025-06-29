import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// Import your extra pages
import ProductPage from "./pages/ProductPage"; // <- Create this

const App = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} /> 
    </Routes>

    <Footer />
  </main>
);

export default App;
