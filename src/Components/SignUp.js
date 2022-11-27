import "./SignUpStyles.css";
import MinimalTopupPopup from "./MinimalTopupPopup";

function SignUp() {
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
                  />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 ms-3 me-3 card-container">
                    <h3 className="my-3  sign-up-heading fw-bold">Sign Up</h3>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control signup-input-field"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        className="form-control signup-input-field"
                        placeholder="Phone no."
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control signup-input-field"
                        placeholder="Email address"
                      />
                    </div>

                    <div
                      className="d-md-flex justify-content-start align-items-center mb-3"
                      style={{ fontSize: "20px" }}
                    >
                      <h6 className="mb-0 me-4" style={{ fontSize: "20px" }}>
                        Gender:{" "}
                      </h6>
                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          defaultValue="option1"
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
                          defaultValue="option2"
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
                          defaultValue="option3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>

                    <div className="form-outline  ">
                      <textarea
                        className="signup-input-field"
                        name="Address"
                        placeholder="Address"
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="submit"
                        className="btn btn-lg btn-block w-50 login-button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Sign Up
                        <MinimalTopupPopup />
                      </button>
                    </div>
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
