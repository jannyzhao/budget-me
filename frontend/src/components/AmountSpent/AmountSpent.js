import Card from "react-bootstrap/Card";
import React from "react";

function AmountSpent({ className, transactions }) {
  return (
    <div className={className}>
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
            style={{ width: "100px", height: "auto" }}
          />
          <Card.Subtitle className="mb-2 text-muted">
            Money Spent in March
          </Card.Subtitle>
          <Card.Text>$100.80</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AmountSpent;
