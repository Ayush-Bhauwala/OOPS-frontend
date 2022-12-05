import "./Headerstyles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerHeader() {
  const navigate = useNavigate();
  function logout() {
    axios.post("https://bargainstrial-production.up.railway.app/logout", {
      id: localStorage.getItem("userid"),
    });
    localStorage.removeItem("userid");
    localStorage.removeItem("role");
    window.location.reload(false);
    navigate("/");
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
          <Link
            to="/orders"
            className="customer w-100"
            style={{ marginLeft: "-5%" }}
          >
            Orders
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
          <Link to="/cart" className="customer w-100">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        <div className="dropdown col-lg-4 col-md-4 col-sm-4 float-end">
          <button
            className="btn dropdown-toggle customer pe-0 me-n3 w-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
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
      </div>
    </>
  );
}

export default CustomerHeader;
