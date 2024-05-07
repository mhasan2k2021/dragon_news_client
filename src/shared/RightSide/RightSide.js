import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./RightSide.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const RightSide = () => {
  const { googleRegister } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="pt-4">
      <div>
        <Button
          onClick={handleGoogleSignIn}
          className="d-block mb-2 btn-log-in"
          variant="outline-primary"
        >
          <FaGoogle className="me-2"></FaGoogle> Google
        </Button>

        <Button className=" d-block btn-log-in" variant="outline-dark">
          <FaGithub className="me-2"></FaGithub> Github
        </Button>
      </div>
      <div className="mt-4 ">
        <h4>Contact Us</h4>
        <div className="mt-3">
          <ButtonGroup className="contact-btn-container" vertical>
            <Button className="mb-2 contact-btn" variant="outline-secondary">
              <FaFacebook className="me-2"></FaFacebook> Facebook
            </Button>
            <Button className="mb-2 contact-btn" variant="outline-secondary">
              <FaTwitter className="me-3"></FaTwitter> Twitter
            </Button>
            <Button className="mb-2 contact-btn" variant="outline-secondary">
              <FaInstagram className="me-2"></FaInstagram> Instagram
            </Button>
            <Button className="mb-2 contact-btn" variant="outline-secondary">
              <FaWhatsapp className="me-2"></FaWhatsapp> WhatsApp
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
