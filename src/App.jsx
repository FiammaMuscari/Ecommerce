
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./pages/Cart";
import WishList from "./Pages/WishList";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import { Contact } from "./pages/Contact";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer/>
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
