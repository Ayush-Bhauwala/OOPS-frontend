import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AccountInfo from "./AccountComponents/AccountInfo";
import EWallet from "./Components/EWallet";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ewallet" element={<EWallet balance="150" />}></Route>

        <Route path="/accountinfo" element={<AccountInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
