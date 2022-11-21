import { useState } from "react";
import Header from "../headerComponents/Header";
import "./EWalletStyles.css";

function EWallet() {
  const [balance, setBalance] = useState(1000);
  const [alert, setAlert] = useState(false);
  return (
    <>
      <Header />
      <div>
        {alert && (
          <>
            <div
              class="alert alert-danger"
              role="alert"
              style={{ padding: ".5%" }}
            >
              <i class="fa-solid fa-triangle-exclamation"></i> Incorrect
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
          <div class="card-body">
            <form method="get">
              <input
                type="number"
                name="topupAmount"
                placeholder="Enter Amount"
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
                onClick={() => {
                  const password = document.getElementById("pswd").value;
                  const amount = document.getElementById("topup").value;
                  password === "123"
                    ? setBalance(parseInt(balance) + parseInt(amount))
                    : setAlert(true);
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
