import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { userLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/";
  console.log(location);

  // this is handle log in function.
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.massage);
      });
  };
  return (
    <div className="mt-4">
      <Form onSubmit={handleLogIn}>
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

        <p>{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div>
        <p>
          I don't have account. <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
