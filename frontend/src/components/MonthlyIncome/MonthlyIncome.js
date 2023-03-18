import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/esm/Container";

function MonthlyIncome() {
  return (
    <Container>
      <Card
        style={{ width: "15rem" }}
        border="success"
        variant="primary"
        className="text-center"
      >
        <Card.Header as="h6">Monthly Income</Card.Header>

        <Card.Body>
          <Card.Img
            variant="top"
            src="calendar.png"
            style={{ width: "100px", height: "auto" }}
          />
          <Card.Subtitle className="mb-2 text-muted">
            Income for March
          </Card.Subtitle>
          <Card.Text>$4500</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MonthlyIncome;
