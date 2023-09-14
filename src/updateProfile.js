import React, { useRef, useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const { currentUser } = useAuth(); // Get the current user from the authentication context
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { updateUserEmail } = useAuth(); // Get the updateUserEmail function from the authentication context
  const { updateUserPassword } = useAuth(); // Get the updateUserPassword function from the authentication context
  const navigate = useNavigate();

  // Handle form submission
  const handelSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      // Show an error toast when passwords do not match
      toast("Passwords do not match", {
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
    }

    const promises = [];
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value)); // Update email if it's different
    }

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value)); // Update password if provided
    }

    // Execute all update promises
    Promise.all(promises)
      .then(() => {
        toast("Update successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/dashboard"); // Redirect to the dashboard after successful update
      })
      .finally(() => {
        setLoading(false);
      });
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
          <h1 id="FormHeading">Update Profile</h1>
          <li>
            <label>Email:</label>
            <input
              type="email"
              placeholder="johndoe123@gmail.com"
              required
              defaultValue={currentUser && currentUser.email}
              ref={emailRef}
            />
          </li>
          <div class="password">
            <li>
              <label>Password:</label>
              <input type="password" required ref={passwordRef} />
            </li>
            <li>
              <label>Confirm Password:</label>
              <input type="password" required ref={passwordConfirmationRef} />
            </li>
          </div>
          <button disabled={loading} type="submit">
            Update Profile
          </button>
          <Link to="/login" className="custom-link">
            <button type="submit">cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
