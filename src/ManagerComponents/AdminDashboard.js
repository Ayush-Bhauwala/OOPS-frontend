import { useNavigate } from "react-router";
import Header from "../headerComponents/Header";
import "./admincomponents.css";

function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header user={localStorage.getItem("role")} />
      <div className="admincontainer mt-2">
        <h1>
          <span className="redtext">Welcome</span>, Admin.
        </h1>
        <p>What would you like to do today?</p>
      </div>
      <div className="adminbody">
        <button
          type="button"
          className="btn btn-primary btn-lg admin-item"
          onClick={() => {
            navigate("/listofmanagers");
          }}
        >
          View List of Managers
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg admin-item"
          onClick={() => {
            navigate("/pendingmanagers");
          }}
        >
          View Pending Managers
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg admin-item mt-2"
          onClick={() => {
            navigate("/listofproducts");
          }}
        >
          View List of Products
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg admin-item mt-2"
          onClick={() => {
            navigate("/listofcustomers");
          }}
        >
          View List of Customers
        </button>
      </div>

      <div className="adminend">
        <button
          type="button"
          className="btn fw-bold mt-2 py-3"
          style={{ color: "#383f51", fontSize: "20px" }}
          onClick={() => {
            navigate("/generatereports");
          }}
        >
          Generate Reports
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AdminDashboard;
