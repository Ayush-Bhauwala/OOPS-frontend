import "./Headerstyles.css";
import { Link, useNavigate } from "react-router-dom";

function CustomerHeader() {
  function logout() {
    localStorage.removeItem("userid");
    window.location.reload(false);
  }
  return (
    <>
      <Link to="/orders" className="customer" style={{ marginLeft: "-5%" }}>
        Orders
      </Link>
      <Link to="/cart" className="customer">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle customer me-1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
          style={{ width: "100%" }}
        >
          <i className="fa-solid fa-user"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <Link to="/accountdetails" className="dropdown-item">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to="/ewallet" className="dropdown-item">
              E-Wallet
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" onClick={() => logout()}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CustomerHeader;
