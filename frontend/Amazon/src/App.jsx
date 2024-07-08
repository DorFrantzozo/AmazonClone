import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/shared/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column side-allPage min-width">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:token" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
