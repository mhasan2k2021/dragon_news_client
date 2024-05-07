import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const { userRegister, userProfileUpdate, setLoading, verifyUserEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        handleUpdateProfile(name, photoURL);
        setLoading(true);
        handleUserEmailVerification();
      })
      .catch((error) => {
        console.error(error);
      });
    const handleUpdateProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      userProfileUpdate(profile);
    };
  };
  const handleUserEmailVerification = () => {
    verifyUserEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <div className="mt-4">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          onClick={handleAccept}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SingUp;
