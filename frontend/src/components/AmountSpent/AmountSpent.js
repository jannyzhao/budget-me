import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/esm/Container";

function AmountSpent({ className }) {
  return (
    <Container className={className}>
      <Card
        style={{ width: "15rem" }}
        border="secondary"
        className="text-center"
      >
        <Card.Header as="h6">Amount Spent</Card.Header>

        <Card.Body>
          <Card.Img
            variant="top"
            src="money.png"
            style={{ width: "110px", height: "auto" }}
          />
          <Card.Subtitle className="mb-2 text-muted">
            Money Spent in March
          </Card.Subtitle>
          <Card.Text>$180.00</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AmountSpent;
