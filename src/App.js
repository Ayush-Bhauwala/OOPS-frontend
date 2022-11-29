import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import ForgotPassword from "./Components/ForgotPassword";

import Login from "./CustomerComponents/Login";
import SignUp from "./CustomerComponents/SignUp";
import AccountDetails from "./CustomerComponents/AccountDetails";
import EWallet from "./CustomerComponents/EWallet";

import SearchResults from "./CustomerComponents/SearchResults";
import BuyProduct from "./CustomerComponents/BuyProduct";
import Cart from "./CustomerComponents/Cart";
import Orders from "./CustomerComponents/Orders";

import AddItem from "./ManagerComponents/AddItem";

function App() {
  // function handleImage(e) {
  //   const files = e.target.files;
  //   console.log(document.getElementById("image").files);
  //   setFile(files);
  //   axios
  //     .post("/user", {
  //       image: document.getElementById("image").files,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  const id = localStorage.getItem("userid");
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/accountdetails" element={<AccountDetails />}></Route>
        <Route path="/ewallet" element={<EWallet />}></Route>

=======
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
>>>>>>> Stashed changes
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

        {/* <Route path="/forgotpassword" element={<ForgotPassword />}></Route> */}
        {/* <Route path="/header" element={<Header user="admin" />}></Route> */}
      </Routes>
      {/* <label htmlFor="image"></label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={(e) => handleImage(e)}
      ></input>
      <div id="image-prev"></div> */}
    </BrowserRouter>
  );
}

export default App;
