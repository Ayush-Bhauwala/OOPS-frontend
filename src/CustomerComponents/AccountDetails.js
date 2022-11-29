import Header from "../headerComponents/Header";
import axios from "axios";

function AccountDetails() {
  var isManager = false;
  return (
    <>
      <Header user={isManager ? "manager" : "customer"} />
      <section className="" style={{ maxHeight: "100vh" }}>
        <div className="container align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  border: "20px solid #383f51",
                  width: "60%",
                  margin: "6.5% auto",
                  verticalAlign: "middle",
                }}
              >
                <div className="row g-0">
                  <div className="d-flex align-items-center">
                    <div className="card-body p-4 p-lg-3 ms-3 me-3 card-container ">
                      <form style={{ height: "100%" }}>
                        <h1
                          className="text-center mb-3 pb-1 fw-bold fs-25"
                          style={{ color: "#383f51" }}
                        >
                          Account Details
                        </h1>

                        <div className="form-floating mb-4">
                          <input
                            type="name"
                            name="name"
                            className="form-control add-item-input"
                            id="username"
                            placeholder="Name"
                          />
                          <label for="username"> Name</label>
                        </div>
                        <div className="row">
                          <div className="col col-lg-6 col-md-6">
                            <div className="form-floating mb-4">
                              <input
                                type="email"
                                className="form-control add-item-input"
                                id="email"
                                placeholder="Email address"
                                readOnly="true"
                              />
                              <label for="email">Email Address</label>
                            </div>
                          </div>

                          <div className="col col-lg-6 col-md-6">
                            <div className="form-floating mb-4">
                              <input
                                type="text"
                                pattern="\d*"
                                minlength="10"
                                maxlength="10"
                                className="form-control add-item-input"
                                id="phone"
                                placeholder="Phone No."
                              />
                              <label for="phone">Phone No.</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control add-item-input"
                            id="address"
                            name="Address"
                            placeholder="Address"
                            style={{ width: "100%" }}
                          />
                          <label for="address">Address</label>
                        </div>
                        <div className="row">
                          <div className="col col-lg-6 col-md-6 pt-1 mb-3 ">
                            <button
                              className="btn btn-lg btn-block w-100 login-button"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                          <div className="col col-lg-6 col-md-6 pt-1 mb-3 ">
                            <button
                              className="btn btn-lg btn-block w-100 login-button"
                              type="submit"
                            >
                              Change Password
                            </button>
                          </div>
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
    </>
  );
}

export default AccountDetails;
