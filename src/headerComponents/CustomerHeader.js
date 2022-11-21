import "./Headerstyles.css";

function CustomerHeader() {
  return (
    <>
      <a href="/orders" class="customer">
        Orders
      </a>
      <a href="/cart" class="customer">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      <div class="dropdown">
        <button
          class="btn dropdown-toggle customer"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
          style={{ width: "100%" }}
        >
          <i class="fa-solid fa-user"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="/accountinfo">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/Logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CustomerHeader;
