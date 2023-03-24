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
      <div className="d-flex justify-content-center gap-4">
        <MonthlyIncome className="pr-4" transactions={userTransactions} />
        <AmountSpent className="mb-4" transactions={userTransactions} />
        <Balance className="mb-4" transactions={userTransactions} />
      </div>
      <TransactionTable transactions={userTransactions} />
    </Container>
  );
}

export default MainPage;
