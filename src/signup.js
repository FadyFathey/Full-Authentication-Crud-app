import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [countryNames, setCountryNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  // Handle the signup process
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      // Show an error toast when passwords do not match
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        toast.success("Signup successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/dashboard");
      } catch (error) {
        setError("Failed to sign up");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch country names from an API
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const names = response.data.map((country) => country.name.common);
        setCountryNames(names);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
        <div className="ImgContainer"></div>
        <form id="Form" onSubmit={handelSubmit}>
          <h1 id="FormHeading">Sign Up</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="Name">
            <li>
              <label>First Name:</label>
              <input type="text" placeholder="John" />
            </li>
            <li>
              <label>Last Name:</label>
              <input type="text" placeholder="Doe" />
            </li>
          </div>
          <li>
            <label>Email:</label>
            <input
              type="email"
              placeholder="johndoe123@gmail.com"
              ref={emailRef}
            />
          </li>
          {countryNames.length > 0 && (
            <div className="Phone">
              <li>
                <label>Country:</label>
                <select>
                  {countryNames.map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </li>
              <li>
                <label>Phone No:</label>
                <input type="pattern" placeholder="123-456-789" />
              </li>
            </div>
          )}

          <div className="password">
            <li>
              <label>Password:</label>
              <input type="password" ref={passwordRef} />
            </li>
            <li>
              <label>Confirm Password:</label>
              <input type="password" ref={passwordConfirmationRef} />
            </li>
          </div>
          <li className="Subscribe">
            <div
              className="CheckBoxCont"
              onClick="ToggleCheckBox(this)"
              data-status="true"
            >
              <div className="tick">
                <hr className="Tickline1" />
                <hr className="Tickline2" />
              </div>
            </div>
            <label htmlFor="subscribe">I want to get updates.</label>
            <Link className="custom-link" to="/login">
              Already have an account?
            </Link>
          </li>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
