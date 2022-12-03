import "./CartNewStyles.css";
import BuyNowPopup from "./BuyNowPopup";
function CartNew(props) {
  const cartItems = props.itemsDetails;
  const delItem = props.delItem;
  const incQty = props.incQty;
  const decQty = props.decQty;
  const onCheckout = props.checkout;
  const balance = props.balance;
  const total = cartItems.reduce(
    (a, c) => a + c.itemClass.price * c.qtybought,
    0
  );
  return (
    <>
      <BuyNowPopup
        price={total}
        balance={balance}
        handleClick={onCheckout}
      ></BuyNowPopup>
      <section className="h-100 gradient-custom" style={{ height: "100%" }}>
        <div className="container py-5" style={{ height: "100vh" }}>
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h1 className="mb-0 fw-bold">Cart</h1>
                </div>
                <div className="card-body">
                  {cartItems.map((item) => {
                    const data = item.itemClass.image.imageData;
                    return (
                      <div key={item.itemClass.itemId} className="row">
                        <div className="col-lg-3 col-md-12 mb-3 mb-lg-0">
                          {/* Image */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={`data:image/jpeg;base64,${data}`}
                              className="w-100"
                              alt={item.itemClass.itemName}
                              style={{ height: "11rem" }}
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              />
                            </a>
                          </div>
                          {/* Image */}
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 ">
                          {/* Data */}
                          <p className="fw-bold" style={{ fontSize: "30px" }}>
                            {item.itemClass.itemName}
                          </p>

                          <button
                            type="button"
                            className="btn me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            style={{
                              fontSize: "18px",
                              color: "#383f51",
                              backgroundColor: "#ff8888",
                            }}
                            onClick={() => delItem(item)}
                          >
                            <i className="fas fa-trash" />
                          </button>

                          {/* Data */}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <div className="row">
                              <label
                                className="form-label fw-bold mb-3"
                                htmlFor="form1"
                                style={{ fontSize: "25px", color: "#383f51" }}
                              >
                                Quantity
                              </label>

                              <div className="form-outline row">
                                <div className="col col-md-3 col-lg-3">
                                  <button
                                    className="btn btn-primary px-3"
                                    style={{
                                      color: "#383f51",
                                      backgroundColor: "#ff8888",
                                    }}
                                    onClick={() => decQty(item)}
                                  >
                                    <i className="fas fa-minus" />
                                  </button>
                                </div>
                                <div className="col col-md-6 col-lg-6">
                                  <input
                                    id="form1"
                                    min={1}
                                    name="quantity"
                                    value={item.qtybought}
                                    max={item.itemClass.qty}
                                    type="number"
                                    className="form-control ms-2 text-center"
                                  />
                                </div>
                                <div className="col col-md-3 col-lg-3">
                                  <button
                                    className="btn btn-primary px-3"
                                    style={{
                                      color: "#383f51",
                                      backgroundColor: "#ff8888",
                                    }}
                                    onClick={() => incQty(item)}
                                  >
                                    <i className="fas fa-plus" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* Quantity */}
                            {/* <input
                              className="mb-5"
                              type="checkbox"
                              id="cartCheckbox"
                              style={{
                                width: "3rem",
                                accentColor: "#383f51",
                              }}
                              checked={check}
                              onClick={() => setCheck(!check)}
                            /> */}
                          </div>
                          {/* Price */}
                          <p className="text-start fw-bold">
                            <span
                              style={{ fontSize: "25px", color: "#383f51" }}
                            >
                              <strong>₹{item.itemClass.price}</strong>
                            </span>
                            <span
                              className="text-danger ms-4"
                              style={{ fontSize: "18px" }}
                            >
                              <s>₹ 100</s>
                            </span>
                          </p>
                          {/* Price */}
                        </div>
                      </div>
                    );
                  })}

                  {/* <hr className="my-3" />
                  <CartNewProduct />
                  <hr className="my-3" />
                  <CartNewProduct /> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h2 className="mb-0 fw-bold">Summary</h2>
                </div>
                <div
                  className="card-body"
                  style={{ fontSize: "25px", color: "#383f51" }}
                >
                  <ul className="list-group list-group-flush">
                    {cartItems.map((item) => {
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          {item.itemClass.itemName}
                          <span>₹{item.itemClass.price * item.qtybought}</span>
                        </li>
                      );
                    })}

                    {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Discount
                      <span>₹...</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{total}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="clearfix">
                    <button
                      type="button"
                      className="btn btn-lg fw-bold float-end"
                      style={{
                        color: "#383f51",
                        backgroundColor: "#ff8888",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartNew;
