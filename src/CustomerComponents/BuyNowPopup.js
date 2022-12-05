import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function BuyNowPopup(props) {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const buy = props.handleClick;
  function handleClick() {
    if (parseInt(props.price) <= parseInt(props.balance)) {
      buy();
      navigate("/orders");
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {alert && (
          <>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ padding: ".75%", fontSize: "25px" }}
            >
              <i className="fa-solid fa-triangle-exclamation"></i> Insufficient
              funds! <Link to="/ewallet">Top Up</Link>
            </div>
          </>
        )}
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "35%" }}
        >
          <div className="modal-content" style={{ color: "#383F51" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5 w-100" id="exampleModalLabel">
                CONFIRM PAYMENT
              </h1>
            </div>
            <div className="modal-body">
              <h2>AMOUNT: ₹{props.price}</h2>
              <h2>AVAILABLE BALANCE: ₹{props.balance}</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                id="confirmButton"
                style={{
                  backgroundColor: "#ff8888",
                  fontWeight: "bold",
                }}
                onClick={() => handleClick()}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNowPopup;
