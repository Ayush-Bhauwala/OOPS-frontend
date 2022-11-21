import "./LoginStyles.css";

function Login() {
  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#383f51", maxHeight: "100vh" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block card-container">
                  <img
                    src="https://i0.wp.com/images.squarespace-cdn.com/content/v1/5c46c28dc258b4167dafc178/1615340266884-YWRI6XD8G1A1HR5SLB2X/eduardo-soares-e4EmPx91Aj4-unsplash.jpg"
                    alt="login form"
                    className="img-fluid login-img"
                    style={{ borderRadius: "1rem 0 0 1rem", width: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 text-black card-container">
                    <form
                      style={{ height: "100%" }}
                      action="/home"
                      method="post"
                    >
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          className="login-logo"
                          src="https://www.logodesign.net/logo/arrow-marketing-112ld.png"
                          alt="logo"
                        ></img>
                        <span className="h1 fw-bold mb-0 login-name">
                          Bargains
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3"
                        style={{ letterSpacing: "0.0625rem", color: "#383f51" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control login-input-field"
                          placeholder="Email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control login-input-field"
                          placeholder="Password"
                        />
                      </div>

                      <div className="pt-1 mb-4 login-div">
                        <button
                          className="btn btn-lg btn-block login-button"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ Color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/signup" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;