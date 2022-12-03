import Header from "../headerComponents/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ChangePassword() {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("userid");
  const [alert, setAlert] = useState(false);

  const [accountDetails, setAccountDetails] = useState({});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.newPassword === data.confirmPassword) {
      setAlert(true);
      setTimeout(() => navigate("/productlist"), 2000);
    }
  };
  // function getAccountDetails() {
  //   const id = localStorage.getItem("userid");
  //   const url = `https://bargainstrial-production.up.railway.app/getuserinfo`;
  //   axios.post(url, { id: id }).then((res) => {
  //     setAccountDetails(res.data);
  //   });
  // }

  // function saveInfo() {
  //   const name = document.getElementById("name").value;
  //   const phoneNo = parseInt(document.getElementById("phone").value);
  //   const address = document.getElementById("address").value;
  //   const url = "https://bargainstrial-production.up.railway.app/modifyuser";
  //   axios.post(url, {
  //     id: id,
  //     name: name,
  //     phoneNo: phoneNo,
  //     address: address,
  //   });
  // }

  // useEffect(() => {
  //   getAccountDetails();
  // }, []);

  return (
    <>
      <Header user={role} />
      {alert && (
        <>
          <div
            className="alert alert-success"
            role="alert"
            style={{ padding: ".75%", fontSize: "20px" }}
          >
            <i className="fa-solid"></i>Password changed successfully!
          </div>
        </>
      )}
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
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ height: "100%" }}
                      >
                        <h1
                          className="text-center mb-3 pb-1 fw-bold fs-25"
                          style={{ color: "#383f51" }}
                        >
                          Change Password
                        </h1>

                        <div className="form-floating mb-4">
                          <input
                            type="password"
                            name="current-password"
                            className="form-control add-item-input"
                            id="current-password"
                            placeholder="current-password"
                            required
                          />
                          <label for="current-password">
                            {" "}
                            Current Password
                          </label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                            type="password"
                            name="new-password"
                            className="form-control add-item-input"
                            id="new-password"
                            placeholder="new-password"
                            required
                            {...register("newPassword")}
                          />
                          <label for="new-password"> New Password</label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                            type="password"
                            name="confirm-new-password"
                            className="form-control add-item-input"
                            id="confirm-new-password"
                            placeholder="confirm-new-password"
                            required
                            {...register("confirmPassword")}
                          />
                          <label for="confirm-new-password">
                            {" "}
                            Confirm New Password
                          </label>
                        </div>

                        <div className="row">
                          <div className="col col-lg-6 col-md-6 pt-1 mb-3 ">
                            <button
                              className="btn btn-lg btn-block w-100 login-button"
                              type="submit"
                              // onClick={() => saveInfo()}
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

export default ChangePassword;
