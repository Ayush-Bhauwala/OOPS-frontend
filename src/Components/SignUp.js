import "./SignUpStyles.css";
import SignupPopup from "./SignupPopup";

function SignUp() {
  return (
    <section className="signupSection">
      <div className="container py-4 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col pt-3">
            <div className="card card-registration">
              <div className="row g-0" style={{ height: "25rem" }}>
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src="https://i0.wp.com/images.squarespace-cdn.com/content/v1/5c46c28dc258b4167dafc178/1615340266884-YWRI6XD8G1A1HR5SLB2X/eduardo-soares-e4EmPx91Aj4-unsplash.jpg"
                    alt="img"
                    className="img-fluid signupImg"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-md-3">
                    <h3 className="mb-2 text-uppercase sign-up-heading ">
                      Sign Up
                    </h3>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone no."
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="d-md-flex justify-content-start align-items-center mb-3 ">
                      <h6 className="mb-0 me-4">Gender: </h6>
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

                    <div className="form-outline ">
                      <textarea
                        name="Address"
                        placeholder="Address"
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="submit"
                        className="btn ms-2 signupBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Sign Up
                        <SignupPopup />
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
