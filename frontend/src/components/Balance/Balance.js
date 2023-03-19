import Card from "react-bootstrap/Card";
import React from "react";

function Balance({ className }) {
  return (
    <div className={className}>
      <Card
        style={{ width: "15rem" }}
        border="secondary"
        className="text-center"
      >
        <Card.Header as="h6">Balance</Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src="bank.png"
            style={{ width: "100px", height: "auto" }}
          />
          <Card.Subtitle className="mb-2 text-muted">
            Remaining Balance
          </Card.Subtitle>
          <Card.Text>$4320.00</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Balance;