import React, { useEffect } from "react";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import Container from "react-bootstrap/Container";
import TransactionTable from "../TransactionTable/TransactionTable";
import AmountSpent from "../AmountSpent/AmountSpent";
import Balance from "../Balance/Balance";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTransactions,
  clearTransactionErrors,
} from "../../store/transactions";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

function MainPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userTransactions = useSelector((state) =>
    Object.values(state.transactions.user.transactions)
  );
  const userCalculations = useSelector(
    (state) => state.transactions.user.calculations
  );

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch]);

  return (
    <Container className="pt-4">
      <h4>Overview</h4>
      <div className="d-flex overflow-auto gap-3 mb-4">
        <MonthlyIncome amount={userCalculations.monthlyIncome} />
        <AmountSpent amount={userCalculations.amountSpent} />
        <Balance amount={userCalculations.balance} />
      </div>
      <h4>Summary</h4>
      <div className="d-flex overflow-auto gap-3 mb-4">
        <ExpenseChart userTransactions={userTransactions} />
      </div>
      <h4>Transactions</h4>
      <TransactionTable transactions={userTransactions} />
    </Container>
  );
}

export default MainPage;
