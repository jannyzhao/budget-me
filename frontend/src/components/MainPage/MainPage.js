import React from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";
import AmountSpent from "../AmountSpent/AmountSpent";

function MainPage() {
  return (
    <Container>
      <MonthlyIncome className="mb-4" />
      <AmountSpent className="mb-4" />
      <TransactionTable />
    </Container>
  );
}

export default MainPage;
