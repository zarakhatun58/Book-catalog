import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import AllBooks from "./Components/AllBooks/AllBooks";
// import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";
import Google from "./Assets/images/google.png";
import { Provider } from "react-redux";
import store from "./redux/store";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      {/* <form
        style={{
          padding: "20px",
          overflow: "hidden",
          margin: "0px !important",
        }}
      >
        <input type="email" placeholder="Email " className="InputBox" />
        <input type="Password" placeholder="Password" className="InputBox" />
        <div className="check">
          <label>
            <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
            <span className="remember-tag">Remember me</span>
          </label>
          <label style={{ color: "#9055FD" }}>forgot password</label>
        </div>
        <div className="loginContain">
          <button type="submit" className="LoginButton">
            Login
          </button>
        </div>
      </form> */}
      {/* <div className="loginContain-btn">
        <button type="button" className="google-Button">
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={Google} alt="" className="icon-G" />
            <span className="google-text"> Google Search</span>{" "}
          </span>
        </button>
      </div> */}
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/allBooks" element={<AllBooks />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
