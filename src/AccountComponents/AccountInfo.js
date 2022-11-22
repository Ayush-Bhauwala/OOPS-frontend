import "./Account.css";
import Header from "../headerComponents/Header";

function AccountInfo() {
  var isManager = true;
  return (
    <div>
      <Header user={isManager ? "manager" : "customer"} />
      <h1 class="Headings">Account Details</h1>
      <form>
        <input type="name" placeholder="Name" className="accountform"></input>
        <input type="email" placeholder="Email" className="accountform"></input>
        <input placeholder="Phone Number" className="accountform"></input>
        <input placeholder="Address" className="accountform"></input>
        {isManager && (
          <input placeholder="GSTIN" className="accountform"></input>
        )}
        <div className="save-forgotpassword">
          <button className="btn btn-primary" id="save" type="submit">
            Save Changes
          </button>
          <button className="btn btn-primary" id="pwd" type="submit">
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountInfo;
