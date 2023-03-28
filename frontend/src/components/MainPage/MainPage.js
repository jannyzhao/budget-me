import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";
import AmountSpent from "../AmountSpent/AmountSpent";
import Balance from "../Balance/Balance";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTransactions,
  clearTransactionErrors,
} from "../../store/transactions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userTransactions = useSelector((state) =>
    Object.values(state.transactions.user)
  );

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch]);

  return (
    <Container className="pt-4">
      <Row>
        <Col className="mb-4 d-flex justify-content-center">
          <MonthlyIncome />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <AmountSpent />
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <Balance />
        </Col>
        <TransactionTable transactions={userTransactions} />
      </Row>
    </Container>
  );
}

export default MainPage;
