import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { CheckoutFormik } from "./components/pages/checkoutFormik/CheckoutFormik";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />

            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutFormik />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<h1>Error 404 not found</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
