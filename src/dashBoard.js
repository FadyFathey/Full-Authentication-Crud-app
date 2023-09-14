import React from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const DashBoard = () => {
  const { currentUser, logOut } = useAuth(); // Get the current user and logOut function from the authentication context
  const navigate = useNavigate();

  // Handle the logout process
  const handelLogOut = async () => {
    try {
      await logOut(); // Call the logOut function
      toast("Logout successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      window.location.href = "/"; // Redirect to the home page after logout
    } catch (error) {
      // Handle any errors that occur during logout
      console.error("Logout failed:", error);
    }
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
        <form id="Form">
          <h1 style={{ textAlign: "center" }} id="FormHeading">
            dashboard
          </h1>
          <h4 style={{ maxWidth: "100%", objectFit: "cover" }} id="FormHeading">
            Your Email: <br />
            {currentUser && currentUser.email} {/* Display user email */}
          </h4>
          <Link
            style={{ marginTop: "119px" }}
            className="custom-link"
            to="/update_profile"
          >
            <button style={{ width: "102%" }} type="submit">
              Update Profile
            </button>
          </Link>

          <button
            onClick={handelLogOut} // Call the logout function when the button is clicked
            style={{ width: "102%", marginTop: "30px" }}
            type="submit"
          >
            log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashBoard;
