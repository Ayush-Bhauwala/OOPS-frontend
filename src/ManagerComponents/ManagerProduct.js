import "../CustomerComponents/SearchResultsStyles.css";
import { useNavigate } from "react-router-dom";

function ManagerProduct(props) {
  const navigate = useNavigate();
  const data = props.image;
  const delItem = props.delItem;
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    src={`data:image/jpeg;base64,${data}`}
                    className="w-100"
                    alt="product img"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(253, 253, 253, 0.15)",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h4>{props.name}</h4>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="ms-1">
                  <div className="d-flex flex-row align-items-center mb-1 ">
                    <h3 className="mb-2 me-3">
                      ₹{" "}
                      {parseInt(props.price) -
                        (parseInt(props.discount) / 100) *
                          parseInt(props.price)}
                    </h3>
                    {props.discount > 0 && (
                      <span className="text-danger">
                        <h5>
                          <s>₹ {props.price}</s>
                        </h5>
                      </span>
                    )}
                  </div>
                  <h5 className="text-success">Free shipping</h5>
                  <div className="d-flex flex-column mt-4">
                    <button
                      className="btn details-btn"
                      style={{ backgroundColor: "#383f51", color: "white" }}
                      type="button"
                      onClick={() =>
                        navigate(`/modifyitem/${parseInt(props.itemId)}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn details-btn"
                      style={{ marginTop: "10%" }}
                      type="button"
                      onClick={delItem}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagerProduct;
