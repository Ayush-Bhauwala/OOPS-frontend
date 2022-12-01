import "./Account.css";
import Header from "../headerComponents/Header";

function AccountInfo() {
  var isManager = true;
  <Header />;
  return (
    <div>
      <Header />
      <h1 class="Headings">Account Details</h1>
      <form
      
      >
        <input type="name" placeholder="Name" class="accountform" size="30"></input>
        <input type="email" placeholder="Email" class="accountform" size="30"></input>
        <input placeholder="Phone Number" class="accountform" size="30"></input>
        
        <textarea placeholder = "Address" name = "AddressArea" id="accountaddress" rows="10" cols = "30"></textarea>
        {isManager ? (
          <input placeholder="GSTIN" class="accountform" size="30"></input>
        ) : (
          true
        )}
        <button class="btn btn-primary" id="save" type="submit">
          Save Changes
        </button>
        <button class="btn btn-primary" id="pwd" type="submit">
          Forgot Password
        </button>
      </form>
    </div>
  );
}

export default AccountInfo;
