import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
                <Nav.Link href={"/transactions"}>All Transactions</Nav.Link>
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
              </Nav>
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
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
              <Nav style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href={"/signup"}>Sign up</Nav.Link>
                <Nav.Link href={"/login"}>Log in</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  };

  return <>{getLinks()}</>;
}

export default NavBar;
