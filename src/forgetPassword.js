import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
import { ToastContainer, toast } from "react-toastify";

const ForgetPassword = () => {
  const emailRef = useRef();
  const { resetEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetEmail(emailRef.current.value);
      setLoading(true);
      if (loading === true) {
        toast("Email rest successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {}
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
          <h1 id="FormHeading">log In</h1>
          <li>
            <label>Email:</label>
            <input
              type="email"
              placeholder="johndoe123@gmail.com"
              ref={emailRef}
            />
          </li>
          <li class="Subscribe">
            <Link className="custom-link" to="/">
              back to sing In
            </Link>
          </li>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
