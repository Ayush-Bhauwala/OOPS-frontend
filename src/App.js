import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AccountInfo from "./Components/AccountInfo";
import EWallet from "./Components/EWallet";
import BuyProduct from "./Components/BuyProduct";
import SearchResults from "./Components/SearchResults";
import Header from "./headerComponents/Header";
import { useState } from "react";
import axios from "axios";

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
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ewallet" element={<EWallet />}></Route>
        <Route path="/accountinfo" element={<AccountInfo />}></Route>
        <Route path="/searchresults" element={<SearchResults />}></Route>
        <Route path="/buyproduct" element={<BuyProduct />}></Route>
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
