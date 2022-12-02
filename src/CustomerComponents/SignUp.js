import "./SignUpStyles.css";
import MinimalTopupPopup from "./MinimalTopupPopup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
function SignUp() {
  const params = useParams();
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmedPassword) {
      setAlert(true);
    } else if (
      data.name &&
      data.phone &&
      data.email &&
      data.gender &&
      data.address &&
      data.password === data.confirmedPassword
    ) {
      axios
        .post("https://bargainstrial-production.up.railway.app/signup", {
          name: data.name,
          email: data.email,
          phoneNo: data.phone,
          role: params.user,
          balance: 0,
          password: data.password,
          address: data.address,
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("userid", response.data.id);
          localStorage.setItem("role", response.data.role);
          window.location.href = "http://localhost:3000";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#383f51", maxHeight: "100vh" }}
    >
      <div className="container align-items-center h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-6 d-none d-md-block  card-container align-items-center">
                  <img
                    src="https://i0.wp.com/images.squarespace-cdn.com/content/v1/5c46c28dc258b4167dafc178/1615340266884-YWRI6XD8G1A1HR5SLB2X/eduardo-soares-e4EmPx91Aj4-unsplash.jpg"
                    alt="img"
                    className="img-fluid signupImg"
                    id="signupImg"
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 ms-3 me-3 card-container">
                    <h3 className="my-3  sign-up-heading fw-bold">Sign Up</h3>
                    {popup && <MinimalTopupPopup />}

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              name="name"
                              className="form-control signup-input-field"
                              id="name"
                              placeholder="Name"
                              {...register("name")}
                              required
                            />
                            <label for="name">Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          pattern="\d*"
                          minlength="10"
                          maxlength="10"
                          name="phone"
                          className="form-control signup-input-field"
                          id="phone"
                          placeholder="Phone no."
                          {...register("phone")}
                          required
                        />
                        <label for="phone">Phone No.</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control signup-input-field"
                          id="email"
                          placeholder="Email address"
                          {...register("email")}
                          required
                        />
                        <label for="email">Email Address</label>
                      </div>

                      <div
                        className="d-md-flex justify-content-start align-items-center mb-3"
                        style={{ fontSize: "16px" }}
                      >
                        <h6 className="mb-0 me-4" style={{ fontSize: "16px" }}>
                          Gender:{" "}
                        </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            defaultValue="female"
                            {...register("gender")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            defaultValue="male"
                            {...register("gender")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            defaultValue="other"
                            {...register("gender")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control signup-input-field"
                          id="address"
                          name="Address"
                          placeholder="Address"
                          style={{ width: "100%" }}
                          {...register("address")}
                          required
                        />
                        <label for="address">Address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          className="form-control signup-input-field"
                          id="password"
                          placeholder="Password"
                          {...register("password")}
                          required
                        />
                        <label for="password">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="confirm password"
                          className="form-control signup-input-field"
                          id="confirm-password"
                          placeholder="Confirm Password"
                          {...register("confirmedPassword")}
                          required
                        />
                        <label for="confirm-password">Confirm Password</label>
                      </div>
                      {alert && (
                        <div
                          className="alert alert-danger w-50"
                          role="alert"
                          style={{ padding: "0.5rem" }}
                        >
                          <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                          Passwords do not match!
                        </div>
                      )}
                      <div className="d-flex justify-content-end pt-2">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block w-50 login-button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
