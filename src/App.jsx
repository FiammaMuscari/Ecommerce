
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import WishList from "./Pages/WishList";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import ProductDetail from "./Components/ProductDetail";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Contact } from "./Pages/Contact";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="bottom-right" />
      <ToastContainer />
    </div>
  );
}

export default App;
