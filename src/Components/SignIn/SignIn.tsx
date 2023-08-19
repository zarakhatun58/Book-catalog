import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStyles } from "./Styles";

const SignIn = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <div>Email : </div>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            className={classes.loginInput}
          />
        </div>
        <div className={classes.inputContainer}>
          <div>Password : </div>
          <label></label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            className={classes.loginInput}
          />
        </div>
        <div>
          <button type="submit" className={classes.buttonL}>
            Log In
          </button>
        </div>
      </form>
      <p>
        Not have an account? <NavLink to="/signup">Sign up"</NavLink>
      </p>
    </div>
  );
};

export default SignIn;
