import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../auth/firebase";
import { officerLogin } from "../api/officerApi";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      const officer = await officerLogin();

      if (officer.officerType === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1>GeoTech Platform</h1>
        <p>
          Advanced geospatial intelligence and secure administrative access for
          authorized personnel.
        </p>

        <div className="left-footer">
          <span>Secure • Reliable • Scalable</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-desc">
            Sign in using your official Google account
          </p>

          <button className="google-login-btn" onClick={login}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>

          <p className="login-note">
            Only authorized GeoTech administrators and officers can access this
            portal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
