import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { login, clearSessionErrors } from "../../store/session";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === "email" ? setEmail : setPassword;
    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Container fluid="sm">
      <Form onSubmit={handleSubmit}>
        <h2>Log In</h2>
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

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={update("password")}
          />
          {errors?.password ? (
            <Form.Text className="errors">{errors?.password}</Form.Text>
          ) : null}
        </Form.Group>

        <Button
          type="submit"
          disabled={!email || !password}
          variant="btn btn-success"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
