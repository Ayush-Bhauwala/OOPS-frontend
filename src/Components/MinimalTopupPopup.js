import { useNavigate } from "react-router-dom";

function MinimalTopupPopup() {
  const navigate = useNavigate();

  return (
    <div
      className="modal"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "35%" }}
      >
        <div className="modal-content text-center">
          <div className="modal-header">
            <h1
              className="modal-title fw-bold w-100"
              id="staticBackdropLabel"
              style={{ fontSize: "25px" }}
            >
              Add minimum balance of ₹1000 to continue
            </h1>
          </div>
          <div className="modal-body">
            <button
              type="button"
              className="btn fw-bold signupBtn fs-25"
              data-bs-dismiss="modal"
              style={{ fontSize: "23px" }}
              onClick={() => navigate("/ewallet")}
            >
              EWallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinimalTopupPopup;
