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

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(
      login({
        email: "user2@demo.com",
        password: "password",
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Container fluid="sm" className="p-3 my-5 d-flex flex-column w-50">
      <Form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
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

        <Button type="submit" disabled={!email || !password} variant="success">
          Login
        </Button>
        <Button type="submit" onClick={demoLogin} variant="outline-success">
          Demo Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
