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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(login({ email, password }));
  // };

  return (
    <Container fluid="sm">
      {/* <form className="session-form" onSubmit={handleSubmit}> */}
      <Form>
        <h2>Log In</h2>
        <div className="errors">{errors?.email}</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="demo@user.io"
            value={email}
            onChange={update("email")}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <div className="errors">{errors?.password}</div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={update("password")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Save Password" />
        </Form.Group>
        <Button type="submit" disabled={!email || !password} variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
