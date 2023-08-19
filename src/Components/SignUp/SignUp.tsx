import React, { useState } from "react";
import { useStyles } from "../SignIn/Styles";

const SignUp = () => {
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
      <h2>Register</h2>
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
        <div className="form-control">
          <label></label>
          <button type="submit" className={classes.buttonL}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
