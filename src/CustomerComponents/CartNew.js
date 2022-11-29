import "./CartNewStyles.css";
import Header from "../headerComponents/Header";
import CartNewProduct from "./CartNewProduct";

function CartNew() {
  return (
    <>
      <Header user="customer" />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h1 className="mb-0 fw-bold">Cart</h1>
                </div>
                <div className="card-body">
                  <CartNewProduct />
                  <hr className="my-3" />
                  <CartNewProduct />
                  <hr className="my-3" />
                  <CartNewProduct />
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
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>₹...</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Discount
                      <span>₹...</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹...</strong>
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
