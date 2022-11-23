function SignupPopup() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" style={{ width: "35%" }}>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 w-100" id="exampleModalLabel">
              Sign up as
            </h1>
          </div>
          <div class="modal-body">
            <button
              type="button"
              class="btn signupBtn"
              data-bs-dismiss="modal"
              style={{ marginRight: "4%" }}
            >
              Customer
            </button>
            <button type="button" class="btn signupBtn" data-bs-dismiss="modal">
              Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPopup;
