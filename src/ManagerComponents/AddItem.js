import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../headerComponents/Header";
import "./AddItemStyles.css";
import { Navigate } from "react-router";

function AddItem() {
  // const [popup, setPopup] = useState(false);
  // const [maxQty, setMaxQty] = useState(1);
  // const [itemName, setItemName] = useState("");
  // const [price, setItemPrice] = useState(0);
  // const [discount, setItemDiscount] = useState(0);
  // const [data, setImg] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
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
      // && image != null
    ) {
      console.log(document.getElementById("product-category").value);
      const url =
        "https://bargainstrial-production.up.railway.app/manager/additem";
      axios
        .post(url, {
          itemName: data.name,
          qty: parseInt(data.quantity),
          category: document.getElementById("product-category").value,
          user_id: localStorage.getItem("userid"),
          price: parseInt(data.price),
          deliveryWithin: 1,
          description: data.description,
        })
        .then((res) => {
          console.log(res.data);
          if (image !== null) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("itemid", res.data);
            formData.append("requesterId", localStorage.getItem("userid"));
            console.log([...formData]);

            axios({
              method: "POST",
              url: "https://bargainstrial-production.up.railway.app/manager/uploadimage",
              data: formData,
            })
              .then((res) => {
                console.log(res.data);
                navigate("/");
              })
              .catch((err) => console.log(err));
            navigate("/");
          }
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Fill all fields.");
    }
  };

  function handleChange(e) {
    e.preventDefault();
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  return (
    <>
      <Header user={localStorage.getItem("role")} />
      <div className="container-fluid px-0">
        <div className="single_product py-5 px-5 gradient-custom">
          {/* {alert && (
            <>
              <div
                className="alert alert-success"
                role="alert"
                style={{ padding: ".75%", fontSize: "20px" }}
              >
                <i className="fa-solid"></i>Item added successfully!
              </div>
            </>
          )} */}
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
                <h2>Add Image:</h2>
                <input
                  className="mb-4"
                  type="file"
                  id="imageInput"
                  onChange={(e) => handleChange(e)}
                  accept="image/*"
                />
                <img src={file} alt="" width="95%" height="75%" />
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
                          min={0}
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
                          min={0}
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

                  <div className="form-floating mb-4">
                    <select
                      className="form-select add-item-input"
                      id="product-category"
                      aria-label="Floating label select example"
                      {...register("category")}
                    >
                      <option selected value="GROCERIES">
                        Groceries
                      </option>
                      <option value="TECHNOLOGY">Technology</option>
                      <option value="FASHION">Fashion</option>
                      <option value="ENTERTAINMENT">Entertainment</option>
                    </select>
                    <label for="product-category">Category</label>
                  </div>

                  <div className="" style={{ color: "#383F51" }}>
                    <h1 className="fs-5 w-100 pb-2">ADD OFFER (optional)</h1>
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
                            defaultValue="0"
                          />
                          <label for="offer">Offer %</label>
                        </div>
                      </div>
                      {/* <div className="col-md-6 col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            type="date"
                            className="form-control offer-input"
                            id="validity-date"
                            placeholder="validity-date"
                            name="validity-date"
                          />
                          <label for="validity-date">Valid till</label>
                        </div>
                      </div> */}
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
