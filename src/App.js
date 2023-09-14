import AuthProvider from "./authContext";
import DashBoard from "./dashBoard";
import ForgetPassword from "./forgetPassword";
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./updateProfile";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forget_password" element={<ForgetPassword />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="update_profile" element={<UpdateProfile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
