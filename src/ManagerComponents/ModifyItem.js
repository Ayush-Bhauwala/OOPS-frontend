import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../headerComponents/Header";
import "./ModifyItemStyles.css";
import { useParams } from "react-router";

function ModifyItem() {
  const params = useParams();
  const [alert, setAlert] = useState(false);
  const [itemDetails, setItemDetails] = useState({});
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function getItemDetails() {
    const url = `https://bargainstrial-production.up.railway.app/customer/getitem/${params.itemId}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      console.log(res.data);
      setItemDetails(res.data);
      if (res.data.image !== null) {
        setData(res.data.image.imageData);
      }
      console.log(itemDetails);
    });
  }

  useEffect(() => {
    getItemDetails();
    console.log("Inside use effect");
  }, []);

  const onSubmit = (data) => {
    const name = document.getElementById("productName");
    const price = document.getElementById("price");
    const quantity = document.getElementById("qty");
    const description = document.getElementById("productDescription");
    if (name && price && quantity && description) {
      console.log(1);
      const url = "https://bargainstrial-production.up.railway.app/modifyitem";
      axios
        .patch(url, {
          itemName: name,
          qty: parseInt(quantity),
          category: itemDetails.category,
          user_id: localStorage.getItem("userid"),
          price: parseInt(price),
          deliveryWithin: 1,
        })
        .then((res) => {
          console.log(res);
          setAlert(true);
          setTimeout(() => navigate("/listofproducts"), 2000);
        })
        .catch((err) => console.log(err));
    } else {
      console.log(2);
    }
  };

  return (
    <>
      <Header user="MANAGER" />

      <div className="container-fluid px-0">
        <div className="single_product py-5 px-5 gradient-custom">
          {alert && (
            <>
              <div
                className="alert alert-success"
                role="alert"
                style={{ padding: ".75%", fontSize: "20px" }}
              >
                <i className="fa-solid"></i>Item modified successfully!
              </div>
            </>
          )}
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              margin: "auto",
            }}
          >
            <div className="row">
              <div
                className="col-lg-6 order-lg-2 order-1"
                style={{ borderRight: "1px solid black" }}
              >
                <img
                  src={`data:image/jpeg;base64,${data}`}
                  alt="product img"
                  width="95%"
                  height="75%"
                />
              </div>
              <div className="col-lg-6 order-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control add-item-input"
                          id="productName"
                          placeholder="..."
                          defaultValue={itemDetails.itemName}
                          {...register("name")}
                          required
                        />
                        <label for="product-name">Enter Product Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col col-lg-6 col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          defaultValue={itemDetails.price}
                          type="number"
                          min={0}
                          name="price"
                          className="form-control add-item-input"
                          id="price"
                          placeholder="₹ "
                          {...register("price")}
                          required
                        />
                        <label for="price-input">Price per Unit (₹)</label>
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-6">
                      <div className="form-floating mb-1">
                        <input
                          type="number"
                          min={1}
                          name="quantity"
                          className="form-control add-item-input"
                          id="qty"
                          defaultValue={itemDetails.qty}
                          {...register("quantity")}
                          required
                        />
                        <label for="product-quantity">Quantity</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control add-item-input"
                      id="productDescription"
                      name="descrption"
                      placeholder="Address"
                      style={{ width: "100%" }}
                      defaultValue={"sdf"}
                      {...register("description")}
                      required
                    />
                    <label for="product-description">
                      Enter Product Description
                    </label>
                  </div>

                  <div className="" style={{ color: "#383F51" }}>
                    <h1 className="fs-5 w-100 pb-2">CHANGE OFFER</h1>
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <div className="form-floating mb-3 ">
                          <input
                            type="number"
                            min={0}
                            className="form-control offer-input"
                            id="offer"
                            placeholder="offer"
                            name="offer"
                            defaultValue={itemDetails.offer}
                          />
                          <label for="offer">Offer %</label>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            type="date"
                            className="form-control offer-input"
                            id="validity-date"
                            placeholder="validity-date"
                            name="validity-date"
                            defaultValue={itemDetails.offerValidTill}
                          />
                          <label for="validity-date">Valid till</label>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-4">
                      <div className="col col-lg-6 col-md-6"></div>
                      <div className="col col-lg-6 col-md-6">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block w-100 login-button"
                        >
                          Modify Item
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifyItem;
