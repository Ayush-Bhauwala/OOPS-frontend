import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../headerComponents/Header";
import ImageUpload from "./ImageUpload";
import "./AddItemStyles.css";

function AddItem() {
  const [popup, setPopup] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (
      data.name &&
      data.price &&
      data.quantity &&
      data.description &&
      data.category
    ) {
      setPopup(true);
    }
  };
  const [maxQty, setMaxQty] = useState(1);
  const [itemName, setItemName] = useState("");
  const [price, setItemPrice] = useState(0);
  const [discount, setItemDiscount] = useState(0);
  const [data, setImg] = useState("");
  function getItemDetails() {
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getitem/2",
    }).then((res) => {
      setMaxQty(res.data.qty);
      setItemName(res.data.itemName);
      setItemPrice(res.data.price);
      setItemDiscount(res.data.offer);
      setImg(res.data.image.imageData);
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
      <Header user="manager" />
      <div className="super_container">
        <div className="single_product py-3 gradient-custom vh-100">
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
                <ImageUpload />
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
                          id="product-name"
                          placeholder="..."
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
                          type="number"
                          name="price"
                          className="form-control add-item-input"
                          id="price-input"
                          placeholder="₹ "
                          {...register("price")}
                          required
                        />
                        <label for="price-input">Price per Unit (₹)</label>
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          type="number"
                          name="quantity"
                          className="form-control add-item-input"
                          id="product-quantity"
                          placeholder="..."
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
                      id="product-description"
                      name="descrption"
                      placeholder="Address"
                      style={{ width: "100%" }}
                      {...register("description")}
                      required
                    />
                    <label for="product-description">
                      Enter Product Description
                    </label>
                  </div>

                  <div class="form-floating mb-4">
                    <select
                      class="form-select add-item-input"
                      id="product-category"
                      aria-label="Floating label select example"
                      {...register("category")}
                    >
                      <option selected>Category 1</option>
                      <option value="1">Category 2</option>
                      <option value="2">Category 3</option>
                      <option value="3">Category 4</option>
                    </select>
                    <label for="product-category">Category</label>
                  </div>

                  <div className="row">
                    <div className="col col-lg-6 col-md-6">
                      <button
                        type="submit"
                        className="btn btn-lg btn-block w-75 login-button"
                      >
                        Add Offer
                      </button>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col col-lg-6 col-md-6"></div>
                    <div className="col col-lg-6 col-md-6">
                      <button
                        type="submit"
                        className="btn btn-lg btn-block w-100 login-button"
                      >
                        Add Item
                      </button>
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

export default AddItem;