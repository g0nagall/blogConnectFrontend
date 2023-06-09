import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  let navigate = useNavigate();

  const token = localStorage.getItem("token");

  const routeChange = (path) => {
    navigate(path);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    handleLoginRedirect();
  };

  const handleRegisterRedirect = () => routeChange("/register");
  const handleLoginRedirect = () => routeChange("/login");
  const handleProfileRedirect = () => routeChange("/profile");

  return (
    <header>
      <div className="header">
        <div style={{ display: token ? "flex" : "none" }}>
          <div
            id="myProfile"
            onClick={handleProfileRedirect}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <p style={{ marginLeft: "15px" }}>See my profile</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {token && (
            <>
              {" "}
              <Link
                id="postsLink"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: "25px",
                }}
                to="/posts"
              >
                View Posts
              </Link>
              <Link
                id="newPostLink"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: "25px",
                }}
                to="/post/create"
              >
                New Post
              </Link>
            </>
          )}
        </div>
        <div
          id="mainRedirectDiv"
          style={{
            display: token ? "none" : "flex",
            cursor: "pointer",
            marginRight: "1350px",
          }}
        >
          <p>Blog Connect</p>
        </div>

        <Button
          id="header-log-oug-button"
          onClick={handleLogOut}
          style={{
            display: token ? "flex" : "none",
            fontSize: 16,
            textTransform: "none",
            borderRadius: 15,
          }}
          className="header-log-oug-button"
          variant="contained"
        >
          Log Out
        </Button>

        <div style={{ display: !token ? "flex" : "none" }}>
          <Button
            id="header-login-button"
            onClick={handleLoginRedirect}
            style={{
              fontSize: 16,
              textTransform: "none",
              borderRadius: 15,
            }}
            className="header-login-button"
            variant="contained"
          >
            Login
          </Button>

          <Button
            id="header-register-button"
            variant="contained"
            onClick={handleRegisterRedirect}
            style={{
              fontSize: 16,
              textTransform: "none",
              borderRadius: 15,
            }}
            className="header-register-button"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
