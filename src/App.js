import Categories from "./pages/Categories";
import Heading from './components/Heading';
import Navbar from "./components/Navbar";
import Offers from './pages/Offers';
import Home from "./pages/Home";


import { Route, Routes } from "react-router-dom";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import { FruitsItem, Dairy, Groceries, Vegetables, Vegs, Meat, All } from "./components/Categories-pages/index";



 
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
     <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
     
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
        </main>
        
        
        
        </CartContext.Provider>
        );
      }

export default App;
