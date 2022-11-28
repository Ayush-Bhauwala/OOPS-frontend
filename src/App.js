import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Login from "./CustomerComponents/Login";
import SignUp from "./CustomerComponents/SignUp";
import AccountDetails from "./CustomerComponents/AccountDetails";
import EWallet from "./CustomerComponents/EWallet";
import SearchResults from "./CustomerComponents/SearchResults";
import BuyProduct from "./CustomerComponents/BuyProduct";
import Cart from "./CustomerComponents/Cart";
import Orders from "./CustomerComponents/Orders";

function App() {
  const [files, setFile] = useState();
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/accountdetails" element={<AccountDetails />}></Route>
        <Route path="/ewallet" element={<EWallet />}></Route>
        <Route path="/searchresults" element={<SearchResults />}></Route>
        <Route path="/buyproduct" element={<BuyProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orders" element={<Orders />}></Route>

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
