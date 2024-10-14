import "./App.css";
import "./assets/style/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import Blog from "./pages/Blog";
import BlogSinglepage from "./pages/BlogSinglepage";
import Service from "./pages/Service";
import ScrollToTop from "../src/components/ScrollToTop";
import Contact from "./pages/Contact";
import ServiceInfo from "./pages/ServiceInfo";
import FleetHire from "./pages/FleetHire";
import ProductBrand from "./pages/ProductBrand";
import CheckStock from "./pages/CheckStock";
import FleetInfo from "./pages/FleetInfo";
import LearnPdf from "./pages/LearnPdf";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-info/:id" element={<ProductInfo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single-page" element={<BlogSinglepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-info/:id" element={<ServiceInfo />} />
        <Route path="/fleet-hire" element={<FleetHire />} />
        <Route path="/product-brand" element={<ProductBrand />} />
        <Route path="/check-out-what-we-stock" element={<CheckStock />} />
        <Route path="/fleet-info/:id" element={<FleetInfo />} />
        <Route path="/learnpdf" element={<LearnPdf />} />
      </Routes>
    </Router>
  );
}

export default App;
