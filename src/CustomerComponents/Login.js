import { useState } from "react";
import { Link, Route } from "react-router-dom";
import "./LoginStyles.css";
import LoginPopup from "./LoginPopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Alert, setAlert] = useState(false);
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (password === "" || email === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
    console.log(email, password);
    axios
      .post("https://bargainstrial-production.up.railway.app/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data != null) {
          localStorage.setItem("userid", response.data.id);
          localStorage.setItem("role", response.data.role);
          window.location.href = "https://bargains.vercel.app";
        } else {
          alert("Incorrect password!");
        }
      })
      .catch(function (error) {
        if (!(password === "" || email === "")) {
          alert(error.response.data.message);
        }
        console.log(error);
      });
  }
  return (
    // <section className="vh-100 gradient-custom" style={{ maxHeight: "100vh" }}>
    <div
      className="gradient-custom py-0 align-items-center"
      style={{ margin: "0", minHeight: "100vh" }}
    >
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh", margin: "0 auto" }}
      >
        <div className="col col-sm-10">
          {Alert && (
            <>
              <div
                className="alert alert-danger"
                role="alert"
                style={{ padding: ".5%" }}
              >
                <i className="fa-solid fa-triangle-exclamation"></i> All fields
                are required!
              </div>
            </>
          )}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-6 ps-0 card-container align-items-center">
                  <img
                    src="https://i0.wp.com/images.squarespace-cdn.com/content/v1/5c46c28dc258b4167dafc178/1615340266884-YWRI6XD8G1A1HR5SLB2X/eduardo-soares-e4EmPx91Aj4-unsplash.jpg"
                    alt="login form"
                    className="img-fluid login-img"
                    // style={{ width: "100%", height: "36rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 ms-2 me-2 card-container ">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img
                        className="login-logo"
                        src="https://www.logodesign.net/logo/arrow-marketing-112ld.png"
                        alt="logo"
                      ></img>
                      <span className="h1 fw-bold mb-0 login-name">
                        Bargains
                      </span>
                    </div>

                    <h5
                      className="fw-normal mt-4 mb-4"
                      style={{ color: "#383f51", fontSize: "30px" }}
                    >
                      Sign into your account
                    </h5>
                    <form>
                      <div className="form-floating mb-4">
                        <input
                          type="email"
                          className="form-control login-input-field"
                          placeholder="Email address"
                          id="email"
                          name="email"
                          required
                        />
                        <label for="email">Email Address</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          
                          className="form-control login-input-field"
                          placeholder="Password"
                          id="password"
                          name="password"
                          required
                        />
                        <label for="password">Password</label>
                      </div>

                      <div className="pt-1 mb-4 login-div">
                        <button
                          className="btn btn-lg btn-block w-50 login-button"
                          type="submit"
                          onClick={(e) => handleClick(e)}
                        >
                          Login
                        </button>
                      </div>

                      <Link
                        className="small text-muted"
                        to="/forgotpassword"
                        style={{ fontSize: "20px" }}
                      >
                        Forgot password?
                      </Link>
                      <p
                        className="mt-4 mb-5 pb-lg-2"
                        style={{ Color: "#393f81", fontSize: "23px" }}
                      >
                        Don't have an account?{" "}
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ color: "#393f81" }}
                        >
                          Register here
                          <LoginPopup />
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
