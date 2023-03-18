import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SplashPage() {
  return (
    <Container fluid style={{ paddingTop: "30vh" }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>BudgetMe</h1>
          <h6 className="text-muted">Let's start saving some money.</h6>
          <Button variant="success" href={"/login"}>
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SplashPage;
