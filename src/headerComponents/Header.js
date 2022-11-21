import "./Headerstyles.css";
import CustomerHeader from "./CustomerHeader";
import LoginHeader from "./LoginHeader";
import ManagerHeader from "./ManagerHeader";
import AdminHeader from "./AdminHeader";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm mynavbar">
        <div className="container-fluid">
          <div>
            <a
              className="navbar-brand mb-0 h1 nav-link active name"
              aria-current="page"
              href="/"
            >
              <img
                src="https://www.logodesign.net/logo/arrow-marketing-112ld.png"
                alt="Logo"
                className="d-inline-block align-text-top logo"
              ></img>
              BARGAINS
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <form className="d-flex container-md" role="search">
              <input
                className="form-control me-2 i search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn search-button" type="submit">
                <i className="fa-brands fa-searchengin"></i>
              </button>
            </form>
            {props.user === "customer" ? (
              <CustomerHeader />
            ) : props.user === "manager" ? (
              <ManagerHeader />
            ) : props.user === "admin" ? (
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
