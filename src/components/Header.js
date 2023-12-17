import { Link } from "react-router-dom";
export default function Header() {
  function logout() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/register";
  }
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <div className="title">
            <Link to="/home" className="find">
              FIND
            </Link>
            <Link to="/home" className="me">
              ME
            </Link>
          </div>
          <div className="element">
            <Link to="/home" className="element-nav">
              Home
            </Link>
            <Link to="/about" className="element-nav">
              About
            </Link>
            <Link to="/dashboard" className="element-nav">
            Dashboard
            </Link>
          </div>
        </div>
        <div className="d-flex">
          {!window.localStorage.getItem("email") ? (
            <>
              <Link
                to="/register"
                style={{ marginRight: "10px" }}
                className="reg-nav"
              >
                Register
              </Link>
              <Link to="/login" className="reg-nav">
                login
              </Link>
            </>
          ) : (
            <Link to="/register" className="reg-nav" onClick={logout}>
              logout
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
