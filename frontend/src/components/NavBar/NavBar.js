import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavBar() {
  const loggedIn = useSelector((state) => {
    return !!state.session.user;
  });

  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const getLinks = () => {
    if (loggedIn) {
      return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href={"/transactions"}>BudgetMe</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href={"/transactions"}>Home</Nav.Link>
                <Nav.Link href={"/transactions"}>All Transactions</Nav.Link>
                <NavDropdown title="Menu" id="navbarScrollingDropdown">
                  <NavDropdown.Item href={"/profile"}>Profile</NavDropdown.Item>
                  <NavDropdown.Item href={"/transactions/new"}>
                    Add New Transaction
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutUser}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Transaction"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href={"/"}>BudgetMe</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="d-flex"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href={"/"}>Home</Nav.Link>
                <Nav.Link href={"/login"}>Log in</Nav.Link>
                <Nav.Link href={"/signup"}>Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  };

  return (
    <>
      {getLinks()}
    </>
  );
}

export default NavBar;
