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
    Object.values(state.transactions.user.transactions)
  );
  const userCalculations = useSelector(
    (state) => state.transactions.user.calculations
  );
  console.log(userCalculations);

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch]);

  return (
    <Container className="pt-4">
      <div className="d-flex justify-content-center gap-4">
        <MonthlyIncome className="pr-4" calculations={userCalculations} />
        <AmountSpent className="mb-4" amount={userCalculations.amountSpent} />
        <Balance className="mb-4" calculations={userCalculations} />
      </div>
      <TransactionTable transactions={userTransactions} />
    </Container>
  );
}

export default MainPage;
