import "./Headerstyles.css";

function ManagerHeader() {
  return (
    <>
      <a href="/addItem" class="manager">
        <i class="fa-solid fa-circle-plus"></i>
      </a>
      <div class="dropdown">
        <button
          class="btn dropdown-toggle manager"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
        >
          <i class="fa-solid fa-user"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="/account">
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

export default ManagerHeader;
