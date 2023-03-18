import React from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";

function MainPage() {
  return (
    <Container>
      <MonthlyIncome />
      <br></br>
      <TransactionTable />
    </Container>
  );
}

export default MainPage;
