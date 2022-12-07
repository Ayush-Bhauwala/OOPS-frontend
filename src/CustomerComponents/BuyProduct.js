import "./BuyProductStyles.css";
import Header from "../headerComponents/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BuyNowPopup from "./BuyNowPopup";

function BuyProduct() {
  const navigate = useNavigate();
  const [maxQty, setMaxQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [price, setItemPrice] = useState(0);
  const [discount, setItemDiscount] = useState(0);
  const [data, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [balance, setBalance] = useState(0);
  const userid = localStorage.getItem("userid");
  const params = useParams();
  const productid = params.itemId;
  const [qty, setQty] = useState(1);
  const [itemsDetails, setItemsDetails] = useState([]);
  function getCart() {
    // const id = localStorage.getItem("userid");
    // const url = `https://bargainstrial-production.up.railway.app/customer/getcart`;
    // axios
    //   .post(url, {
    //     user_id: id,
    //   })
    //   .then((res) => {
    //     setItemsDetails(res.data);
    //   });

    const id = localStorage.getItem("userid");
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/customer/getcart",
        {
          id: id,
        }
      )
      .then((res) => {
        setItemsDetails(res.data);
        // console.log(res.data);
      });
  }

  function getItemDetails() {
    const url = `https://bargainstrial-production.up.railway.app/customer/getitem/${productid}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      // console.log(res.data);
      setMaxQty(res.data.qty);
      setItemName(res.data.itemName);
      setItemPrice(res.data.price);
      setItemDiscount(res.data.offer);
      if (res.data.image !== null) {
        setImg(res.data.image.imageData);
      }
      setCategory(res.data.category);
      setDescription(res.data.description);
    });
  }

  function addToCart() {
    if (localStorage.getItem("userid") === null) {
      alert("Please login first.");
    } else {
      let qtyInCart = 0;
      const qtybought = parseInt(
        document.getElementById("quantity_input").value
      );
      const exist = itemsDetails.find((x) => x.itemClass.itemId === productid);
      for (var i = 0; i < itemsDetails.length; i++) {
        console.log(itemsDetails[i]);
        qtyInCart =
          itemsDetails[i].itemClass.itemId === parseInt(productid) &&
          parseInt(itemsDetails[i].qtybought);
      }
      console.log("qtybought " + qtybought);
      console.log("qtyincart " + qtyInCart);
      const totalqty = qtyInCart + qtybought;
      console.log(totalqty);
      if (maxQty >= totalqty) {
        console.log("treu");
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
          .post(
            "https://bargainstrial-production.up.railway.app/customer/addtocart",
            {
              userid: userid,
              productid: productid,
              qtybought: qtybought,
            }
          )
          .then(function (response) {
            console.log(response);
            alert("Added successfully!");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("Max quantity reached");
      }
      getCart();
    }
  }
  function getBalance() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/ewallet/getbalance",
        {
          id: userid,
        }
      )
      .then(function (response) {
        // console.log(response.data);
        setBalance(response.data.balance);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function buyNow() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/customer/buyitem",
        {
          userid: userid,
          qtybought: parseInt(document.getElementById("quantity_input").value),
          productid: productid,
        }
      )
      .then((res) => {
        alert("Order successful!")(
          (window.location.href = "https://bargains.vercel.app/orders")
        );
      });
  }

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
            ₹ {(discount / 100) * price}
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <Header user={localStorage.getItem("role")} />
      <BuyNowPopup
        price={(price - (discount / 100) * price) * qty}
        balance={balance}
        handleClick={() => buyNow()}
      />
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
                        <Link to="/">HOME</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to={`/categoryitems/${category.toUpperCase()}`}>
                          {category}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">{itemName}</li>
                    </ol>
                  </nav>
                  <div className="product_name">{itemName}</div>

                  <div>
                    {" "}
                    <span className="product_price">
                      ₹ {price - (discount / 100) * price}
                    </span>{" "}
                    {discount > 0 && Discount()}
                  </div>
                  <hr className="singleline" />
                  <div className="row">
                    <div className="col">
                      <span className="product_info">
                        {maxQty === 0 ? "Out of Stock" : "In stock"}
                      </span>
                      {/* <span className="product_info">
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
                      </span> */}
                      <p>{description}</p>
                    </div>
                    {/* <div
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
                    </div> */}
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
                          onChange={(e) => setQty(parseInt(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {" "}
                      <button
                        type="button"
                        className="btn shop-button w-100"
                        onClick={() => addToCart()}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <button
                        type="button"
                        className="btn shop-button "
                        data-bs-toggle={
                          localStorage.getItem("userid") !== null ? "modal" : ""
                        }
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          console.log(
                            document.getElementById("quantity_input").value
                          );
                          localStorage.getItem("userid") === null &&
                            alert("Please login first.");
                        }}
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
