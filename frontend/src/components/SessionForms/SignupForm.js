import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./SessionForm.css";
import { signup, clearSessionErrors } from "../../store/session";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    let setState;

    switch (field) {
      case "email":
        setState = setEmail;
        break;
      case "username":
        setState = setUsername;
        break;
      case "password":
        setState = setPassword;
        break;
      case "password2":
        setState = setPassword2;
        break;
      default:
        throw Error("Unknown field in Signup Form");
    }

    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      username,
      password,
    };

    dispatch(signup(user));
  };

  return (
    <Container>
      <Form className="session-form" onSubmit={handleSubmit}>
        <h2>Sign Up Form</h2>
        <div className="errors">{errors?.email}</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={update("email")}
            placeholder="Email"
          />
        </Form.Group>
        <div className="errors">{errors?.username}</div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={update("username")}
            placeholder="Username"
          />
        </Form.Group>
        <div className="errors">{errors?.password}</div>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={update("password")}
            placeholder="Password"
          />
        </Form.Group>
        <div className="errors">
          {password !== password2 && "Confirm Password field must match"}
        </div>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={update("password2")}
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          value="Sign Up"
          disabled={!email || !username || !password || password !== password2}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignupForm;
