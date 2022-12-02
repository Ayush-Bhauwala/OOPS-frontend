import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";

function ForgotPassword() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email) {
      setAlert(true);
      setTimeout(() => navigate("/login"), 2000);
    }
  };
  return (
    <section className="vh-100 gradient-custom" style={{ maxHeight: "100vh" }}>
      <div className="container align-items-center h-100">
        {alert && (
          <div
            className="alert alert-success"
            role="alert"
            style={{ padding: ".5%", fontSize: "20px" }}
          >
            <i className="fa-solid"></i>Email sent successfully!
          </div>
        )}
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-6 d-none d-md-block card-container align-items-center">
                  <img
                    src="https://i0.wp.com/images.squarespace-cdn.com/content/v1/5c46c28dc258b4167dafc178/1615340266884-YWRI6XD8G1A1HR5SLB2X/eduardo-soares-e4EmPx91Aj4-unsplash.jpg"
                    alt="login form"
                    className="img-fluid login-img"
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 ms-3 me-3 card-container ">
                    <div className="d-flex align-items-center mb-4 pb-1">
                      <img
                        className="login-logo"
                        src="https://www.logodesign.net/logo/arrow-marketing-112ld.png"
                        alt="logo"
                      ></img>
                      <span className="h1 fw-bold mb-0 login-name">
                        Bargains
                      </span>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      style={{ height: "100%" }}
                    >
                      <h2
                        className="my-4 pb-2 fw-bold fs-25"
                        style={{ color: "#383f51" }}
                      >
                        Forgot Password
                      </h2>
                      <h5>Enter email address to receive new password.</h5>
                      <div className="form-floating my-5">
                        <input
                          type="email"
                          required
                          className="form-control add-item-input"
                          id="email"
                          placeholder="Email address"
                          {...register("email")}
                          // value={accountDetails.email}
                        />
                        <label for="email">Email Address</label>
                      </div>

                      <div className="col col-lg-6 col-md-6 pt-1 mb-3 ">
                        <button
                          className="btn btn-lg btn-block w-100 login-button"
                          type="submit"
                        >
                          Send Email
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
export default ForgotPassword;
