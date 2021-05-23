import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { login } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    dispatch(login(userData));
  };

  return (
    <div className="auth_page">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Meetup-Network</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChangeInput}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="pass">
            <Form.Control
              type={typePass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChangeInput}
              value={password}
            />
            {/* <i class="fas fa-eye" onClick={() => setTypePass(!typePass)}></i> */}
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
        </Form.Group>

        <Button
          className="w-100"
          variant="danger"
          type="submit"
          disabled={email && password ? false : true}
        >
          Submit
        </Button>
        <p className="my-2">
          You don't have an account? <Link to="/register">Register Now</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
