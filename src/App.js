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
import CustomerList from "./ManagerComponents/CustomerList";
import ListOfProducts from "./ManagerComponents/ListOfProducts";
import ProductList2 from "./ManagerComponents/ProductList2";
import CategoryItems from "./CustomerComponents/CategoryItems";
import AdminDashboard from "./ManagerComponents/AdminDashboard";
import PendingManagers from "./ManagerComponents/PendingManagers";
import ItemsDate from "./Reports/ItemsDate";
import ItemsStock from "./Reports/ItemsStock";
import OrderDetails from "./Reports/OrderDetails";
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
            ) : role === "ADMIN" ? (
              <AdminDashboard />
            ) : (
              <MainPage />
            )
          }
        ></Route>

        <Route path="/categoryitems">
          <Route path=":category" element={<CategoryItems />}></Route>
        </Route>

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

        <Route
          path="/listofcustomers"
          element={
            role !== "MANAGER" && role !== "ADMIN" ? (
              <Navigate to="/" />
            ) : (
              <CustomerList />
            )
          }
        ></Route>
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
            role !== "MANAGER" && role !== "ADMIN" ? (
              <Navigate to="/" />
            ) : (
              <ListOfProducts />
            )
          }
        ></Route>

        <Route
          path="/listofmanagers"
          element={role !== "ADMIN" ? <Navigate to="/" /> : <ManagerList />}
        ></Route>

        <Route
          path="/pendingmanagers"
          element={role === "ADMIN" ? <PendingManagers /> : <Navigate to="/" />}
        ></Route>

        <Route path="/itemsdate">
          <Route
            path=":date"
            element={role === "ADMIN" ? <ItemsDate /> : <Navigate to="/" />}
          ></Route>
        </Route>

        <Route
          path="/itemsstock"
          element={role === "ADMIN" ? <ItemsStock /> : <Navigate to="/" />}
        ></Route>

        <Route path="/orderdetails">
          <Route
            path=":email"
            element={role === "ADMIN" ? <OrderDetails /> : <Navigate to="/" />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
