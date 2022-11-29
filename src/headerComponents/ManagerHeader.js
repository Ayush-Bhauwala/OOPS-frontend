import "./Headerstyles.css";
import { Link } from "react-router-dom";

function ManagerHeader() {
  return (
    <>
      <Link to="/additem" className="manager">
        <i className="fa-solid fa-circle-plus"></i>
      </Link>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle manager me-1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
          style={{ width: "100%" }}
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
            <a className="dropdown-item" href="/Logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ManagerHeader;
