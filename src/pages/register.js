import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "male",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, confirm_password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typePassCf, setTypePassCf] = useState(false);

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    dispatch(register(userData));
  };

  return (
    <div className="auth_page">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Meetup-Network</h3>
        <Form.Group controlId="formBasicFullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            onChange={handleChangeInput}
            value={fullname}
            style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
          />
          <Form.Text className="text-danger">
            {alert.fullname ? alert.fullname : ""}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handleChangeInput}
            value={username.toLowerCase().replace(/ /g, "")}
            style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
          />
          <Form.Text className="text-danger">
            {alert.username ? alert.username : ""}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChangeInput}
            value={email}
            style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
          />
          <Form.Text className="text-danger">
            {!alert.email
              ? "We'll never share your email with anyone else."
              : alert.email}
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
              style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
            />
            {/* <i class="fas fa-eye" onClick={() => setTypePass(!typePass)}></i> */}
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
          <Form.Text className="text-danger">
            {alert.password ? alert.password : ""}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div className="pass">
            <Form.Control
              type={typePassCf ? "text" : "password"}
              name="confirm_password"
              placeholder="Confirm password"
              onChange={handleChangeInput}
              value={confirm_password}
              style={{
                background: `${alert.confirm_password ? "#fd2d6a14" : ""}`,
              }}
            />
            <small onClick={() => setTypePassCf(!typePassCf)}>
              {typePassCf ? "Hide" : "Show"}
            </small>
          </div>
          <Form.Text className="text-danger">
            {alert.confirm_password ? alert.confirm_password : ""}
          </Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-between mb-1 mt-3">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="radio"
              label="Male"
              id="male"
              name="gender"
              value="male"
              defaultChecked
              onChange={handleChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="radio"
              label="Female"
              id="female"
              name="gender"
              value="female"
              onChange={handleChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="radio"
              label="Other"
              id="other"
              name="gender"
              value="other"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </div>

        <Button className="w-100 mt-3" variant="danger" type="submit">
          Register
        </Button>
        <p className="my-2">
          Already have an account? <Link to="/">Login Now</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
