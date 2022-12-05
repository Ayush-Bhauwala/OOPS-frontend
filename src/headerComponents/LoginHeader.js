import { useNavigate } from "react-router";
import "./Headerstyles.css";

function LoginHeader() {
  const navigate = useNavigate();
  return (
    <div className="clearfix float-end">
      <button
        className="btn login-button me-3 py-1 w-100 "
        type="submit"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}

export default LoginHeader;
