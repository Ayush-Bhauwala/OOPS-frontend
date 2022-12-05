import "./Headerstyles.css";
import ManagerHeader from "./ManagerHeader";

function AdminHeader() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
        <a href="#" className="admin">
          ADMIN
        </a>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
        <ManagerHeader />
      </div>
    </div>
  );
}

export default AdminHeader;
