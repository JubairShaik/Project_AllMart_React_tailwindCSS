import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Groceries  from "./components/Categories-pages/Furnitures";
import FruitsItem from "./components/Categories-pages/FruitsItem";
import Lamps from "./components/Categories-pages/Lamps";
import Kitchen from "./components/Categories-pages/Kitchen";
import Chairs from "./components/Categories-pages/Chairs";

import Dairy from "./components/Categories-pages/SkinCare";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Offers from './pages/Offers';
import Heading from './components/Heading';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
    
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="offers" element={<Offers/>}/>
          <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="groceries" element={<Groceries />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="fruits" element={<FruitsItem />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
