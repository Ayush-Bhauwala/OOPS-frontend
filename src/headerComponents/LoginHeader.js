import { useNavigate } from "react-router";
import "./Headerstyles.css";

function LoginHeader() {
  const navigate = useNavigate();
  return (
    <button
      className="btn login-button me-3 py-1"
      type="submit"
      onClick={() => navigate("/login")}
    >
      Login
    </button>
  );
}

export default LoginHeader;
