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
  const [data, setImg] = useState("");
  const [balance, setBalance] = useState(0);
  const userid = localStorage.getItem("userid");
  const productid = 2;

  const [itemsDetails, setItemsDetails] = useState([]);
  function getCart() {
    const id = localStorage.getItem("userid");
    const url = `http://localhost:8080/customer/getcart/${id}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      setItemsDetails(res.data);
    });
  }

  function getItemDetails() {
    const url = `http://localhost:8080/customer/getitem/${productid}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      setMaxQty(res.data.qty);
      setItemName(res.data.itemName);
      setItemPrice(res.data.price);
      setItemDiscount(res.data.offer);
      setImg(res.data.image.imageData);
    });
  }

  function addToCart() {
    var qtyInCart = 0;
    const qtybought = parseInt(document.getElementById("quantity_input").value);
    const exist = itemsDetails.find((x) => x.itemClass.itemId === productid);
    for (var i = 0; i < itemsDetails.length; i++) {
      qtyInCart =
        itemsDetails[i].itemClass.itemId === productid &&
        itemsDetails[i].qtybought;
    }
    console.log("qtybought " + qtybought);
    console.log("qtyincart " + qtyInCart);
    const totalqty = qtyInCart + qtybought;
    console.log(totalqty);
    if (maxQty >= totalqty) {
      if (exist) {
        setItemsDetails(
          itemsDetails.map((x) =>
            x.itemClass.itemId === productid
              ? {
                  ...exist,
                  qtybought: exist.qtybought + qtybought,
                }
              : x
          )
        );
      }
      axios
        .post("http://localhost:8080/customer/addtocart", {
          userid: userid,
          productid: productid,
          qtybought: qtybought,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      alert("Added successfully!");
    } else {
      alert("Max quantity reached");
    }
    getCart();
  }
  function getBalance() {
    axios
      .post("http://localhost:8080/ewallet/getbalance", {
        id: userid,
      })
      .then(function (response) {
        console.log(response.data);
        setBalance(response.data.balance);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function buyNow() {}

  useEffect(() => {
    getCart();
    getItemDetails();
    getBalance();
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
      <BuyNowPopup price={price} balance={balance} handleClick={buyNow} />
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
                    src={`data:image/jpeg;base64,${data}`}
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
                      <button
                        type="button"
                        className="btn shop-button"
                        onClick={() => addToCart()}
                      >
                        Add to Cart
                      </button>
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
