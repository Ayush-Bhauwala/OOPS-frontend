function ForgotPassword() {
  return (
    <>
      <form>
        <input placeholder="Email"></input>
        <button type="submit">SEND OTP</button>
        <input placeholder="Enter OTP"></input>
        <input placeholder="New password" type="password"></input>
        <input placehoder="Confirm password" type="password"></input>
      </form>
    </>
  );
}
export default ForgotPassword;
