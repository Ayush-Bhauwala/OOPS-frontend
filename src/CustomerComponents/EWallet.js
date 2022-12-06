import { useState, useEffect } from "react";
import Header from "../headerComponents/Header";
import "./EWalletStyles.css";
import axios from "axios";
function EWallet() {
  const [balance, setBalance] = useState(0);
  const [alert, setAlert] = useState(false);
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("userid");
  function getUserInfo() {
    const url = `https://bargainstrial-production.up.railway.app/ewallet/getbalance`;
    axios
      .post(url, {
        id: localStorage.getItem("userid"),
      })
      .then((res) => {
        console.log(res.data);
        setBalance(res.data.balance);
      });
  }

  async function topUp() {
    console.log("top up called");
    const url =
      "https://bargainstrial-production.up.railway.app/customer/ewallet/topup";
    const password = document.getElementById("pswd").value;
    const amount = parseInt(document.getElementById("topup").value);
    await axios
      .patch(url, {
        user_id: id,
        balance: amount,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserInfo();
    console.log("Inside use effect");
  }, []);
  return (
    <>
      <Header user={role} />
      <div>
        {alert && (
          <>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ padding: ".5%" }}
            >
              <i className="fa-solid fa-triangle-exclamation"></i> Incorrect
              Password! Please try again
            </div>
          </>
        )}

        <h1 id="ewalletHeading">
          E-Wallet <i className="fa-solid fa-wallet"></i>
        </h1>
        <div className="balance">
          <p>Total Balance</p>
          <p className="amount">₹ {balance}</p>
        </div>
        <div className="card text-center ewalletCard">
          <div className="card-body">
            <form method="get">
              <div className="form-floating mb-4">
                <input
                  type="number"
                  name="topupAmount"
                  placeholder="Enter Amount (₹)"
                  className="form-control ewalletInput"
                  id="topup"
                />
                <label for="topup">Enter Amount (₹)</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Enter Password"
                  className="form-control ewalletInput"
                  id="pswd"
                />
                <label for="pswd">Enter Password</label>
              </div>

              <button
                type="button"
                className="btn login-button topupbtn"
                onClick={() => topUp()}
                onKeyDown={(e) => {
                  e.key === "enter" && topUp();
                }}
              >
                Top Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EWallet;
