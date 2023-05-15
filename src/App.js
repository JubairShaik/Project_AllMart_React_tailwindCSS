import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Groceries  from "./components/Categories-pages/Furnitures";
import FruitsItem from "./components/Categories-pages/FruitsItem";
import Dairy from "./components/Categories-pages/Dairy";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Offers from './pages/Offers';
import Heading from './components/Heading';
import Vegetables from './components/Categories-pages/Vegetables';
import Vegs from './components/Categories-pages/Vegs';
import Meat from './components/Categories-pages/Meat';

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

          <Route path="allmartFoods" element={<Groceries />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="fruits" element={<FruitsItem />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="meat" element={<Meat/>} />

          <Route path="essentials" element={<Vegs />} />



        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>



    </CartContext.Provider>
  );
}

export default App;
