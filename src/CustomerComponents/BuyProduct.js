import "./BuyProductStyles.css";
import Header from "../headerComponents/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BuyNowPopup from "./BuyNowPopup";

function BuyProduct() {
  const [maxQty, setMaxQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [price, setItemPrice] = useState(0);
  const [discount, setItemDiscount] = useState(0);

  function getItemDetails() {
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getitem/1",
    }).then((res) => {
      setMaxQty(res.data.qty);
      setItemName(res.data.itemName);
      setItemPrice(res.data.price);
      setItemDiscount(res.data.offer);
    });
  }
  useEffect(() => {
    getItemDetails();
  }, []);

  function Discount() {
    return (
      <>
        <strike className="product_discount">
          <span style={{ color: "black" }}>₹ {price}</span>
        </strike>
        <div>
          <span className="product_saved">You Saved:</span>{" "}
          <span style={{ color: "#383f51", fontSize: "18px" }}>
            ₹ {discount}
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <Header user="customer" />
      <BuyNowPopup price="29000" balance="1000" />
      <div className="super_container">
        <div className="single_product py-3">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              margin: "1% auto",
            }}
          >
            <div className="row">
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="image_selected">
                  <img
                    src="https://i.imgur.com/qEwct2O.jpg"
                    alt="product img"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-3" style={{ paddingLeft: "5%" }}>
                <div className="product_description">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                      </li>
                      <li className="breadcrumb-item active">Category</li>
                    </ol>
                  </nav>
                  <div className="product_name">{itemName}</div>

                  <div>
                    {" "}
                    <span className="product_price">
                      ₹ {price - discount}
                    </span>{" "}
                    {discount > 0 && Discount()}
                  </div>
                  <hr className="singleline" />
                  <div className="row">
                    <div className="col-lg-6">
                      {" "}
                      <span className="product_info">
                        EMI starts at ₹ 2,000. No Cost EMI Available
                        <span>
                          <br />{" "}
                          <span className="product_info">
                            Warranty: 6 months warranty
                            <span>
                              <br />{" "}
                              <span className="product_info">
                                7 Days easy return policy
                                <span>
                                  <br />{" "}
                                  <span className="product_info">
                                    7 Days easy return policy
                                    <span>
                                      <br />{" "}
                                      <span className="product_info">
                                        In Stock: 25 units sold this week
                                        <span> </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{
                        borderLeft: "1px dashed black",
                        lineHeight: "30px",
                      }}
                    >
                      <span className="product_info">
                        Seller Name:
                        <span>
                          <br />{" "}
                          <span className="product_info">
                            GSTIN:
                            <span>
                              <br />{" "}
                              <span className="product_info">
                                Seller Address:
                                <span>
                                  <br />{" "}
                                  <span className="product_info">
                                    Estimated Delivery Date:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <hr className="singleline" />
                  <div className="row">
                    <div className="col-xs-6" style={{ marginLeft: "13px" }}>
                      <div className="product_quantity">
                        <span>QTY: </span>
                        <input
                          id="quantity_input"
                          type="number"
                          defaultValue={1}
                          min="1"
                          max={maxQty}
                        />
                      </div>
                    </div>
                    <div className="col-xs-6">
                      {" "}
                      <button type="button" className="btn shop-button">
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        className="btn shop-button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyProduct;
