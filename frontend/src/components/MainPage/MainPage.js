import React, { useEffect, useState } from "react";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import Container from "react-bootstrap/Container";
import TransactionTable from "../TransactionTable/TransactionTable";
import DateSelector from "../DateSelector/DateSelector";
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
  const [month, setMonth] = useState(
    new Date().toLocaleDateString("en-US", { month: "numeric" })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const handleMonth = (e) => {
    setMonth(e);
  };
  const handleYear = (e) => {
    setYear(e);
  };

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id, year, month));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch, year, month]);

  return (
    <Container className="pt-4">
      <div className="d-flex justify-content-between mb-4">
        <h4>Welcome, {currentUser.username}!</h4>
        <DateSelector
          month={month}
          year={year}
          onMonthChange={handleMonth}
          onYearChange={handleYear}
        />
      </div>
      <h5>Overview</h5>
      <div className="d-flex overflow-auto gap-3 mb-4">
        <MonthlyIncome amount={userCalculations.monthlyIncome} />
        <AmountSpent amount={userCalculations.amountSpent} />
        <Balance amount={userCalculations.balance} />
        <ExpenseChart userTransactions={userTransactions} />
      </div>

      <h5>Transactions</h5>
      <TransactionTable transactions={userTransactions} />
    </Container>
  );
}

export default MainPage;
