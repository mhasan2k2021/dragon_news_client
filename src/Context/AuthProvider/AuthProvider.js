import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // this is google sign up function...

  const googleRegister = () => {
    return signInWithPopup(auth, provider);
  };

  // this is user log in function ....

  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyUserEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // this is log in function..

  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // this function for use log out.
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // this function for update profile..

  const userProfileUpdate = (profile) => {
    setLoading(true);
    updateProfile(auth.currentUser, profile);
  };

  // this is get current user function .

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    googleRegister,
    setLoading,
    userRegister,
    verifyUserEmail,
    userLogIn,
    userLogOut,
    userProfileUpdate,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
