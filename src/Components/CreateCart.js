import { useState } from "react";

function CreateCart(props) {
  const cartItems = props.itemsDetails;
  return (
    <>
      <div style={{ padding: "1%" }}>
        {cartItems.length == 0 ? (
          <div
            style={{
              margin: "auto",
              width: "fit-content",
              height: "100vh",
              marginTop: "5%",
            }}
          >
            <h1>Cart is Empty</h1>
          </div>
        ) : (
          <div>
            {/* <BuyNowPopup price={total} balance="10000"></BuyNowPopup>
            <h1 style={{ padding: "1%", margin: "auto", width: "fit-content" }}>
              Your Cart
            </h1>
            <table style={{ padding: "10%", width: "100%", margin: "2%" }}>
              <thead style={{ margin: "2%", padding: "2%" }}>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Item Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.itemClass.itemId}>
                    <td style={{ width: "10%" }}>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                          onClick={() => deleteItem(props.itemID)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                    <td style={{ width: "30%" }}>
                      <img src={`data:image/jpeg;base64,${data}`} width="20%" />
                    </td>
                    <td>{props.itemName}</td>
                    <td>₹{props.price}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div class="h-100">
              <div class="container py-5">
                <div class="row d-flex justify-content-center my-4">
                  {cartItems.map((item) => {
                    const data = item.itemClass.image.imageData;
                    return (
                      <div class="col-md-8">
                        <div class="card mb-4">
                          <div class="card-header py-3">
                            <h5 class="mb-0">
                              Cart - {cartItems.length} items
                            </h5>
                          </div>
                          <div class="card-body">
                            {/* <!-- Single item --> */}
                            <div class="row">
                              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                {/* <!-- Image --> */}
                                <div
                                  class="bg-image hover-overlay hover-zoom ripple rounded"
                                  data-mdb-ripple-color="light"
                                >
                                  <img
                                    src={`data:image/jpeg;base64,${data}`}
                                    class="w-100"
                                    alt={item.itemClass.itemName}
                                  />
                                  <a href="#!">
                                    <div
                                      class="mask"
                                      style={{
                                        backgroundColor:
                                          "rgba(251, 251, 251, 0.2)",
                                      }}
                                    ></div>
                                  </a>
                                </div>
                                {/* <!-- Image --> */}
                              </div>

                              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                {/* <!-- Data --> */}
                                <p>
                                  <strong>{item.itemClass.itemName}</strong>
                                </p>

                                {/* <!-- Data --> */}
                              </div>

                              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                {/* <!-- Quantity --> */}
                                <div
                                  class="d-flex mb-4"
                                  style={{
                                    maxWidth: "300px",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  {/* <button
                                    class="btn btn-primary px-3 me-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                  >
                                    <i class="fas fa-minus"></i>
                                  </button> */}

                                  <div class="form-outline">
                                    <input
                                      id="form1"
                                      min="1"
                                      name="quantity"
                                      defaultValue={item.qtybought}
                                      type="number"
                                      class="form-control"
                                      max={item.itemClass.qty}
                                      onChange={(e) => {
                                        item.qtybought = e.target.value;
                                        console.log(item.qtybought);
                                      }}
                                    />
                                    <label class="form-label" for="form1">
                                      Quantity
                                    </label>
                                  </div>

                                  {/* <button
                                    class="btn btn-primary px-3 ms-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                  >
                                    <i class="fas fa-plus"></i>
                                  </button> */}
                                </div>
                                {/* <!-- Quantity --> */}

                                {/* <!-- Price --> */}
                                <p class="text-start text-md-end">
                                  <strong>
                                    ₹{item.qtybought * item.itemClass.price}
                                  </strong>
                                </p>
                                {/* <!-- Price --> */}
                              </div>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                                style={{
                                  width: "fit-content",
                                  marginLeft: "3%",
                                }}
                              >
                                <i class="fas fa-trash"></i>
                              </button>
                            </div>
                            {/* <!-- Single item --> */}

                            <hr class="my-4" />

                            {/* <!-- Single item --> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div class="col-md-4">
                    <div class="card mb-4">
                      <div class="card-header py-3">
                        <h5 class="mb-0">Summary</h5>
                      </div>
                      <div class="card-body">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products
                            <span>$53.98</span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>Free</span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                              <strong>Total amount</strong>
                            </div>
                            <span>
                              <strong>$53.98</strong>
                            </span>
                          </li>
                        </ul>

                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Go to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default CreateCart;
