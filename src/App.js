import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AccountInfo from "./Components/AccountInfo";
import EWallet from "./Components/EWallet";
import BuyProduct from "./Components/BuyProduct";
import SearchResults from "./Components/SearchResults";
import Header from "./headerComponents/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ewallet" element={<EWallet />}></Route>
        <Route path="/accountinfo" element={<AccountInfo />}></Route>
        <Route path="/searchresults" element={<SearchResults />}></Route>
        <Route path="/buyproduct" element={<BuyProduct />}></Route>
        <Route path="/header" element={<Header user="customer" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
