import React, { useState } from "react";
import "../../styles/login.css";
import loginBgImage from "../../images/login-bg.jpg";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth.js";
import { Link } from "react-router-dom";

function LoginBody() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <section className="log-in" id="log-in">
        <div className="max-width">
          <div className="box">
            <div className="image-col">
              <img src={loginBgImage} alt="" />
            </div>
            <div className="log-in-col">
              <h2>LOGIN</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="feild Email">
                  <input
                    type="email"
                    className="email-feild"
                    placeholder="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="feild password">
                  <input
                    className="password-feild"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="button">
                  <button style={{ cursor: "pointer" }} type="submit">
                    Log In
                  </button>
                </div>
              </form>
              <p>
                New to the app?
                <Link
                  to={{
                    pathname: "/SignUp",
                    state: false,
                  }}
                  className="btn"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginBody;
