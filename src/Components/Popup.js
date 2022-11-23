function Popup() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "35%" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 w-100" id="exampleModalLabel">
              Sign up as
            </h1>
          </div>
          <div className="modal-body">
            <button
              type="button"
              className="btn signupBtn"
              data-bs-dismiss="modal"
              style={{ marginRight: "4%" }}
            >
              Customer
            </button>
            <button
              type="button"
              className="btn signupBtn"
              data-bs-dismiss="modal"
            >
              Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popup;
