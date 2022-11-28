import { useNavigate } from "react-router-dom";

function LoginPopup() {
  const navigate = useNavigate();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "35%" }}
      >
        <div className="modal-content text-center">
          <div className="modal-header">
            <h1
              className="modal-title fw-bold fs-25 w-100"
              id="exampleModalLabel"
            >
              Sign up as
            </h1>
          </div>
          <div className="modal-body">
            <button
              type="button"
              className="btn fw-bold signupBtn"
              data-bs-dismiss="modal"
              style={{ marginRight: "5%", fontSize: "25px" }}
              onClick={() => navigate("/signup")}
            >
              Customer
            </button>
            <button
              type="button"
              className="btn fw-bold signupBtn"
              data-bs-dismiss="modal"
              style={{ fontSize: "25px" }}
              onClick={() => navigate("/signup")}
            >
              Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPopup;
