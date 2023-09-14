import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Get the login function from the authentication context
  const { currentUser } = useAuth(); // Get the current user from the authentication context
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // Handle the login process
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value); // Call the login function
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard"); // Redirect to the dashboard upon successful login
    } catch (error) {
      setError("Login failed");
    }
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="FormContainer">
        <div class="ImgContainer"></div>
        <form id="Form" onSubmit={handelSubmit}>
          <h1 id="FormHeading">Log In</h1>
          <li>
            <label>Email:</label>
            <input
              type="email"
              placeholder="johndoe123@gmail.com"
              ref={emailRef}
            />
          </li>

          <div class="password">
            <li>
              <label>Password:</label>
              <input
                ref={passwordRef}
                style={{ width: "205%" }}
                type="password"
              />
            </li>
          </div>
          <li class="Subscribe">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                style={{ marginLeft: "50px" }}
                className="custom-link"
                to="/"
              >
                Create an account now
              </Link>
              <Link
                style={{ marginLeft: "80px", marginTop: "30px" }}
                className="custom-link"
                to="/forget_password"
              >
                Forget password
              </Link>
            </div>
          </li>

          <button style={{ width: "102%" }} type="submit" disabled={loading}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
