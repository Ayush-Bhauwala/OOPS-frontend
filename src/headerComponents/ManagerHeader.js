import "./Headerstyles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function ManagerHeader() {
  const navigate = useNavigate();
  function logout() {
    axios.post("https://bargainstrial-production.up.railway.app/logout", {
      id: localStorage.getItem("userid"),
    });
    localStorage.removeItem("userid");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload(false);
  }
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
        <Link to="/additem" className="manager w-100 text-center">
          <i className="fa-solid fa-circle-plus"></i>
        </Link>
      </div>
      <div className="dropdown col-lg-6 col-md-6 col-sm-6">
        <button
          className="btn dropdown-toggle manager me-2 "
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
          style={{ width: "100%", marginLeft: "30%" }}
        >
          <i className="fa-solid fa-user"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="/accountdetails">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/ewallet">
              E-Wallet
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" onClick={() => logout()}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ManagerHeader;
