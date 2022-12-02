import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../headerComponents/Header";
import "./ModifyItemStyles.css";
import { Navigate } from "react-router";

function ModifyItem() {
  // const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
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
      setAlert(true);
      setTimeout(() => navigate("/productlist"), 2000);
      // setPopup(true);
      const url =
        "https://bargainstrial-production.up.railway.app/manager/modifyitem";
      axios
        .post(url, {
          itemName: data.name,
          qty: parseInt(data.quantity),
          category: data.category,
          user_id: localStorage.getItem("userid"),
          price: parseInt(data.price),
          deliveryWithin: 1,
        })
        .then((res) => {
          console.log(res);
          setId(res.data);
        })
        .catch((err) => console.log(err));

      const formData = new FormData();
      formData.append("image", image);
      formData.append("itemid", id);
      formData.append("requesterid", localStorage.getItem("userid"));

      axios({
        method: "POST",
        url: "http://localhost:8080/manager/uploadimage",
        data: formData,
        headers: { "content-type": "multipart/form-data" },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setAlert(true);
      setTimeout(() => navigate("/productlist"), 2000);
    }
  };

  // function handleChange(e) {
  //   e.preventDefault();
  //   setFile(URL.createObjectURL(e.target.files[0]));
  //   setImage(e.target.files[0]);
  // }

  return (
    <>
      <Header user="manager" />

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
                {/* <h2>Add Image:</h2> */}
                {/* <input
                  className="mb-4"
                  type="file"
                  id="imageInput"
                  onChange={(e) => handleChange(e)}
                  accept="image/*"
                /> */}
                <img src={image} alt="product img" width="95%" height="75%" />
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
                      <div className="form-floating mb-1">
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
                      <div className="text-success mb-4 ms-3">Qty Sold: </div>
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
                      <option selected>Groceries</option>
                      <option value="1">Technology</option>
                      <option value="2">Fashion</option>
                      <option value="3">Entertainment</option>
                    </select>
                    <label for="product-category">Category</label>
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
