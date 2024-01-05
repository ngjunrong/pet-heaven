const Button = () => {
  return (
    <div class="header-btn">
      <button class="log-in" id="loginBtn">
        Log in
      </button>

      <div class="login-form-container" id="form">
        <span id="close-login-form" class="bx bx-x"></span>

        <form action="">
          <h3>user login</h3>
          <input type="email" placeholder="email" class="box" required />
          <input type="password" placeholder="password" class="box" required />
          <p>
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
          <p>Or Login With</p>
          <div class="buttons">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              class="btn"
            >
              Google
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              class="btn"
            >
              Facebook
            </a>
          </div>
          <p>
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
    </div>
  );
};

export default Button;
