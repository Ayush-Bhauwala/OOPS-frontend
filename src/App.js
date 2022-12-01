import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./CustomerComponents/Login";
import SignUp from "./CustomerComponents/SignUp";
import AccountDetails from "./CustomerComponents/AccountDetails";
import EWallet from "./CustomerComponents/EWallet";
import MainPage from "./AccountComponents/MainPage";
import SearchResults from "./CustomerComponents/SearchResults";
import BuyProduct from "./CustomerComponents/BuyProduct";
import Cart from "./CustomerComponents/Cart";
import Orders from "./CustomerComponents/Orders";

import AddItem from "./ManagerComponents/AddItem";

function App() {
  const id = localStorage.getItem("userid");
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/mp"
          element={id === null ? <Navigate to="/login" /> : <MainPage />}
        ></Route>
        <Route
          path="/login"
          element={id != null ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={id != null ? <Navigate to="/" /> : <SignUp />}
        ></Route>
        <Route
          path="/accountdetails"
          element={id === null ? <Navigate to="/login" /> : <AccountDetails />}
        ></Route>
        <Route
          path="/ewallet"
          element={id === null ? <Navigate to="/login" /> : <EWallet />}
        ></Route>
        <Route path="/searchresults" element={<SearchResults />}></Route>
        <Route path="/buyproduct" element={<BuyProduct />}></Route>
        <Route
          path="/cart"
          element={id === null ? <Navigate to="/login" /> : <Cart />}
        ></Route>
        <Route
          path="/orders"
          element={id === null ? <Navigate to="/login" /> : <Orders />}
        ></Route>


        <Route path="/additem" element={<AddItem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
