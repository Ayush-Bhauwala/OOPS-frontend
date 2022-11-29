import { useState, useEffect } from "react";
import Header from "../headerComponents/Header";
import "./EWalletStyles.css";
import axios from "axios";
function EWallet() {
  const [balance, setBalance] = useState(1000);
  const [alert, setAlert] = useState(false);
  var isManager = false;
  function getUserInfo() {
    const id = localStorage.getItem("userid");
    const url = `http://localhost:8080/admin/getuser/${id}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      setBalance(res.data.ewallet.balance);
    });
  }

  function topUp() {
    const password = document.getElementById("pswd").value;
    const amount = parseInt(document.getElementById("topup").value);
    password === "123"
      ? setBalance(parseInt(balance) + parseInt(amount))
      : setAlert(true);
  }

  useEffect(() => {
    getUserInfo();
    console.log("Inside use effect");
  }, []);
  return (
    <>
      <Header user={isManager ? "manager" : "customer"} />
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
              <input
                type="number"
                name="topupAmount"
                placeholder="Enter Amount (₹)"
                className="ewalletInput"
                id="topup"
              />
              <input
                type="password"
                required
                name="password"
                placeholder="Enter Password"
                className="ewalletInput"
                id="pswd"
              />
              <button
                type="button"
                className="btn login-button topupbtn"
                onClick={() => topUp()}
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
