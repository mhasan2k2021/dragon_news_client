import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="nav-container">
      <Link className="a-link logo">Dragon News</Link>
      <p className="text-light">{user?.displayName}</p>
      <div className="nav-list">
        <Link to="/" className="a-link">
          Home
        </Link>
        {user?.uid ? (
          <>
            <Link
              onClick={handleLogOut}
              to="/login"
              className="margin-left btn-container a-link"
            >
              <button className="nav-btn">LogIn</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="margin-left btn-container a-link">
              <button className="nav-btn">LogIn</button>
            </Link>
            <Link to="/signup" className="margin-left btn-container a-link">
              <button className="nav-btn">SignUp</button>
            </Link>
          </>
        )}
        <div className="user-container margin-left">
          {user?.photoURL ? (
            <img className="user-img" src={user.photoURL} alt="user"></img>
          ) : (
            <FaUser></FaUser>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
