import React from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";

function MainPage() {
  return (
    <Container>
      <MonthlyIncome className="mb-4" />
      <TransactionTable />
    </Container>
  );
}

export default MainPage;
