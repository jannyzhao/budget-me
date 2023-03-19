import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, clearSessionErrors } from "../../store/session";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

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
    <Container fluid="sm">
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up Form</h2>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="username"
            placeholder="Username"
            value={username}
            onChange={update("username")}
          />
          {errors?.username ? (
            <Form.Text className="errors">{errors?.username}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="demo@user.io"
            value={email}
            onChange={update("email")}
          />
          {errors?.email ? (
            <Form.Text className="errors">{errors?.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={update("password")}
          />
          {errors?.password ? (
            <Form.Text className="errors">{errors?.password}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>

          <Form.Control
            type="password"
            value={password2}
            onChange={update("password2")}
            placeholder="Confirm Password"
          />
          {errors?.password2 ? (
            <Form.Text className="errors">
              {password !== password2 && "Confirm Password field must match"}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button
          variant="success"
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
