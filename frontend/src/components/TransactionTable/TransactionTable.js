import Table from "react-bootstrap/Table";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TransactionRow from "./TransactionRow";
import AddTransaction from "./AddTransaction";


function TransactionTable() {

  return (
    <Container>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>COMPANY</th>
            <th>DESCRIPTION</th>
            <th>TYPE</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <TransactionRow
            date="03/15/2023"
            company="NIKE"
            description="Shoes"
            amount="$150.00"
          />
          <TransactionRow
            date="03/17/2023"
            company="DOORDASH"
            description="Marufuku"
            amount="$30.00"
          />
          <TransactionRow
            date="03/19/2023"
            company="META"
            description="Direct Deposit"
            amount="$4000.00"
          />
        </tbody>
      </Table>
      < AddTransaction />
    </Container>
  );
}

export default TransactionTable;
