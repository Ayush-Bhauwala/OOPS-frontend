import { useNavigate, Link } from "react-router-dom";
import Banner from "./BargainsLogo (2).png";
import "./Headerstyles.css";
import CustomerHeader from "./CustomerHeader";
import LoginHeader from "./LoginHeader";
import ManagerHeader from "./ManagerHeader";
import AdminHeader from "./AdminHeader";
import axios from "axios";
function Header(props) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const search = document.getElementById("search").value;
    if (search !== "") {
      navigate(`/searchresults/${search}`);
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-sm mynavbar">
        <div className="container-fluid">
          <div>
            <Link
              className="navbar-brand mb-0 me-4 h1 nav-link active name"
              aria-current="page"
              to="/"
            >
              <img
                src={Banner}
                alt="Logo"
                className="d-inline-block align-text-top logo h5 me-3"
              ></img>
              BARGAINS
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <form className="d-flex container-md container-lg" role="search">
              <input
                className="form-control me-2 i search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
                onKeyUp={(e) => e.key === "enter" && handleSearch(e)}
              />
              <button
                className="btn search-button"
                type="submit"
                onClick={(e) => handleSearch(e)}
              >
                <i className="fa-brands fa-searchengin"></i>
              </button>
            </form>
            {props.user === "CUSTOMER" ? (
              <CustomerHeader />
            ) : props.user === "MANAGER" ? (
              <ManagerHeader />
            ) : props.user === "ADMIN" ? (
              <AdminHeader />
            ) : (
              <LoginHeader />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
