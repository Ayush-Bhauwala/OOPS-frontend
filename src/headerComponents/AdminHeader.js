import "./Headerstyles.css";
import ManagerHeader from "./ManagerHeader";

function AdminHeader() {
  return (
    <>
      <a href="#" class="admin">
        ADMIN
      </a>
      <ManagerHeader />;
    </>
  );
}

export default AdminHeader;
