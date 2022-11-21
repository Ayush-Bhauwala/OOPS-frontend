import "./Headerstyles.css";
import CustomerHeader from "./CustomerHeader";
import LoginHeader from "./LoginHeader";
import ManagerHeader from "./ManagerHeader";
import AdminHeader from "./AdminHeader";

function Header() {
  var user = false;
  var manager = true;
  var admin = false;

  return (
    <header>
      <nav class="navbar navbar-expand-lg mynavbar">
        <div class="container-fluid">
          <a
            class="navbar-brand mb-0 h1 nav-link active name"
            aria-current="page"
            href="/"
          >
            <img
              src="https://www.logodesign.net/logo/arrow-marketing-112ld.png"
              alt="Logo"
              width="40"
              height="30"
              class="d-inline-block align-text-top logo"
            ></img>
            BARGAINS
          </a>
          <div class="collapse navbar-collapse">
            <form class="d-flex container-md" role="search">
              <input
                class="form-control me-2 i search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn search-button" type="submit">
                <i class="fa-brands fa-searchengin"></i>
              </button>
            </form>
            {user ? (
              <CustomerHeader />
            ) : manager ? (
              <ManagerHeader />
            ) : admin ? (
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
