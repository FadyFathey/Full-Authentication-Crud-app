import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import auth from "./firebase";

// Create a context for authentication
const AuthContext = createContext();

// Authentication provider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(); // Store the current user
  const [loading, setLoading] = useState(true); // Loading state while checking authentication

  // Sign up a new user with email and password
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log out the current user
  const logOut = () => {
    return signOut(auth);
  };

  // Log in an existing user with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Send a password reset email to the provided email address
  const resetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Update the email address of the current user
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  // Update the password of the current user
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };

  // Use an effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set the current user if authenticated
      setLoading(false); // Set loading to false once authentication state is determined
    });

    // Unsubscribe from the authentication state when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the authentication context to children components
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        logOut,
        login,
        resetEmail,
        updateUserEmail,
        updateUserPassword,
      }}
    >
      {!loading && children} {/* Render children once loading is false */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Custom hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
