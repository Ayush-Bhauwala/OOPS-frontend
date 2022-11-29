import "./CartNewStyles.css";
import { useState } from "react";

function CartNewProduct(props) {
  const [check, setCheck] = useState(true);

  return (
    <div className="row">
      <div className="col-lg-3 col-md-12 mb-3 mb-lg-0">
        {/* Image */}
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
            className="w-100"
            alt={props.name}
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
          {props.name}
        </p>

        <p style={{ fontSize: "25px" }}>Seller: </p>

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
        >
          <i className="fas fa-trash" />
        </button>

        {/* Data */}
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        {/* Quantity */}
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
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
                  style={{ color: "#383f51", backgroundColor: "#ff8888" }}
                  onClick={() =>
                    document.querySelector("input[type=number]").stepDown()
                  }
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
              <div className="col col-md-6 col-lg-6">
                <input
                  id="form1"
                  min={0}
                  name="quantity"
                  defaultValue={1}
                  type="number"
                  className="form-control ms-2 text-center"
                />
              </div>
              <div className="col col-md-3 col-lg-3">
                <button
                  className="btn btn-primary px-3"
                  style={{ color: "#383f51", backgroundColor: "#ff8888" }}
                  onClick={() =>
                    document.querySelector("input[type=number]").stepUp()
                  }
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          </div>
          {/* Quantity */}
          <input
            className="mb-5"
            type="checkbox"
            id="cartCheckbox"
            style={{
              width: "3rem",
              accentColor: "#383f51",
            }}
            checked={check}
            onClick={() => setCheck(!check)}
          />
        </div>
        {/* Price */}
        <p className="text-start fw-bold">
          <span style={{ fontSize: "25px", color: "#383f51" }}>
            <strong>₹ 1000</strong>
          </span>
          <span className="text-danger ms-4" style={{ fontSize: "18px" }}>
            <s>₹ 100</s>
          </span>
        </p>
        {/* Price */}
      </div>
    </div>
  );
}

export default CartNewProduct;
