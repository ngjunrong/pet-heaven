import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    document.querySelector(".log-in").onclick = () => {
      document
        .querySelector(".login-form-container")
        .classList.toggle("active");
    };

    document.querySelector("#close-login-form").onclick = () => {
      document
        .querySelector(".login-form-container")
        .classList.remove("active");
    };
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={require("../images/petheaven.png")} alt="Pet Heaven Logo" />
      </Link>

      <div class="bx bx-menu" id="menu-icon">
        <AiOutlineMenu />
      </div>

      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/listings">Listings</Link>
        </li>
        <li>
          {" "}
          <Link to="/adopt">Adopt</Link>
        </li>
        <li>
          {" "}
          <Link to="/release">Release</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="header-btn">
        <button className="log-in" id="loginBtn">
          Log in
        </button>
      </div>

      <div className="login-form-container" id="form">
        <span id="close-login-form" className="bx bx-x">
          <AiOutlineClose />
        </span>

        <form action="">
          <h3 style={{ color: "black" }}>user login</h3>
          <input type="email" placeholder="email" class="box" required />
          <input type="password" placeholder="password" class="box" required />
          <p style={{ textAlign: "center" }}>
            Forget Your Password
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Click Here
            </a>
          </p>
          <input
            type="submit"
            value="Login"
            class="btn"
            onclick="removeLogInBtn()"
          />
          <p style={{ textAlign: "center" }}>Or Login With</p>
          <div className="buttons">
            <a
              style={{ color: "black" }}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              class="btn"
            >
              Google
            </a>
            <a
              style={{ color: "black" }}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              class="btn"
            >
              Facebook
            </a>
          </div>
          <p style={{ textAlign: "center" }}>
            Don't Have An Account
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Create One
            </a>
          </p>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
