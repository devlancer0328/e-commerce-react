import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Books } from "./pages/shop/books/Books";
import { Games } from "./pages/shop/games/Games";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import { BottomBar } from "./components/bottombar/BottomBar";

function App() {
  return (
    <div className="app-container">
      <ShopContextProvider>
        <Router>
          <Header />
          <BottomBar />
          <Routes>
            <Route path="/e-commerce-react/" element={<Home />} />
            <Route path="/e-commerce-react/books" element={<Books />} />
            <Route path="/e-commerce-react/games" element={<Games />} />
            <Route path="/e-commerce-react/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
