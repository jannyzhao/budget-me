import Card from "react-bootstrap/Card";
import React from "react";

function Balance({ className, amount }) {
  return (
    <div className={className}>
      <Card
        style={{ width: "15rem" }}
        border="secondary"
        className="text-center"
      >
        <Card.Body>
          <Card.Img
            variant="top"
            src="bank.png"
            style={{ width: "100px", height: "auto" }}
          />
          <Card.Subtitle className="mb-2 text-muted">
            Remaining Balance
          </Card.Subtitle>
          <Card.Text>${amount}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Balance;
