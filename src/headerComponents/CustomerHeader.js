import "./Headerstyles.css";

function CustomerHeader() {
  return (
    <>
      <a href="/orders" className="customer" style={{ marginLeft: "-5%" }}>
        Orders
      </a>
      <a href="/cart" className="customer">
        <i className="fa-solid fa-cart-shopping"></i>
      </a>
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

export default CustomerHeader;
