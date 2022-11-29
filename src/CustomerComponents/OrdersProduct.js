import "./OrdersStyles.css";

function OrdersProduct(props) {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-12 col-xl-10">
        <div
          className="card shadow-0 border rounded-4"
          style={{ color: "#383f51" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={props.image} className="w-100" alt="product img" />
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
                <h3>{props.name}</h3>
                <hr style={{ width: "50%" }} />
                <h4 className="text-success">
                  Estimated Delivery Date: {props.edd}
                </h4>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="ms-1">
                  <div className="d-flex flex-row align-items-center mb-1 ">
                    <h3 className="mb-2 me-3">
                      ₹ {parseInt(props.price) - parseInt(props.discount)}
                    </h3>
                    {props.discount > 0 && (
                      <span className="text-danger">
                        <h5>
                          <s>₹ {props.price}</s>
                        </h5>
                      </span>
                    )}
                  </div>

                  <h4>Quantity ordered: {props.quantity}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrdersProduct;
