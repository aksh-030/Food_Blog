import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
        <Link to="/" className="logo">Hi, Welcome to my <span className="styleText">Kitchen!</span></Link>
        <nav>
          <Link to="/login" className="login-tag">Login</Link>
          <Link to="/register" className="reg-tag">Register</Link>
        </nav>
      </header>
  );
}