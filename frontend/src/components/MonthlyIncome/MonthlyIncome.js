import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/esm/Container";

function MonthlyIncome({ className }) {
  return (
    <div className={className}>
      <Card
        style={{ width: "15rem" }}
        border="secondary"
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
          <Card.Text>$4500.00</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MonthlyIncome;
