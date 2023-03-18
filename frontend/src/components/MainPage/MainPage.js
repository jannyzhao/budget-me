import React from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";
import AmountSpent from "../AmountSpent/AmountSpent";

function MainPage() {
  return (
    <Container className="pt-4">
      <div className="d-flex gap-4">
        <MonthlyIncome className="pr-4" />
        <AmountSpent className="mb-4" />
      </div>
      <TransactionTable />
    </Container>
  );
}

export default MainPage;
