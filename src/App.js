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
import ForgotPassword from "./CustomerComponents/ForgotPassword";
import ChangePassword from "./AccountComponents/ChangePassword";

import ModifyItem from "./ManagerComponents/ModifyItem";

import ManagerList from "./ManagerComponents/ManagerList";


import ListOfProducts from "./ManagerComponents/ListOfProducts";
import ProductList2 from "./ManagerComponents/ProductList2";

function App() {
  const id = localStorage.getItem("userid");
  const role = localStorage.getItem("role");
  console.log(id);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            role === "MANAGER" ? (
              <Navigate to="/listofproducts" />
            ) : (
              <MainPage />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={id != null ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route path="/signup">
          <Route path=":user" element={<SignUp />}></Route>
        </Route>
        <Route
          path="/accountdetails"
          element={id === null ? <Navigate to="/login" /> : <AccountDetails />}
        ></Route>
        <Route
          path="/ewallet"
          element={id === null ? <Navigate to="/login" /> : <EWallet />}
        ></Route>
        <Route path="/searchresults">
          <Route path=":searchInput" element={<SearchResults />}></Route>
        </Route>
        <Route path="/buyproduct">
          <Route path=":itemId" element={<BuyProduct />}></Route>
        </Route>
        <Route
          path="/cart"
          element={id === null ? <Navigate to="/login" /> : <Cart />}
        ></Route>
        <Route
          path="/orders"
          element={id === null ? <Navigate to="/login" /> : <Orders />}
        ></Route>
        <Route path="/additem" element={<AddItem />}></Route>

        <Route path="/modifyitem">
          <Route path=":itemId" element={<ModifyItem />}></Route>
        </Route>

        <Route path="/managerlist" element={<ManagerList />}></Route>
        <Route path="/plist" element={<ProductList2 />}></Route>
        <Route
          path="/forgotpassword"
          element={id !== null ? <Navigate to="/" /> : <ForgotPassword />}
        ></Route>
        <Route
          path="/changepassword"
          element={id === null ? <Navigate to="/" /> : <ChangePassword />}
        ></Route>
        <Route
          path="/listofproducts"
          element={
            role !== "MANAGER" ? <Navigate to="/" /> : <ListOfProducts />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
