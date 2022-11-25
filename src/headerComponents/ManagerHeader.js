import "./Headerstyles.css";

function ManagerHeader() {
  return (
    <>
      <a href="/addItem" className="manager">
        <i className="fa-solid fa-circle-plus"></i>
      </a>
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
            <a className="dropdown-item" href="/accountinfo">
              Profile
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
