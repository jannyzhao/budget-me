import jwtFetch from "./jwt";
import { RECEIVE_USER_LOGOUT } from "./session";

const RECEIVE_TRANSACTIONS = "transactions/RECEIVE_TRANSACTIONS";
const RECEIVE_USER_TRANSACTIONS = "transactions/RECEIVE_USER_TRANSACTIONS";
const RECEIVE_NEW_TRANSACTION = "transactions/RECEIVE_NEW_TRANSACTION";
const RECEIVE_TRANSACTION_ERRORS = "transactions/RECEIVE_TRANSACTION_ERRORS";
const CLEAR_TRANSACTION_ERRORS = "transactions/CLEAR_TRANSACTION_ERRORS";

const receiveTransactions = (transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});


const receiveUserTransactions = (transactions) => ({
  type: RECEIVE_USER_TRANSACTIONS,
  transactions,
});

const receiveNewTransaction = (transaction) => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction,
});

const receiveTransactionErrors = (errors) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors,
});

export const clearTransactionErrors = (errors) => ({
  type: CLEAR_TRANSACTION_ERRORS,
  errors,
});

export const fetchTransactions = () => async (dispatch) => {
  try {
    const res = await jwtFetch("/api/transactions");
    const transactions = await res.json();
    dispatch(receiveTransactions(transactions));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      dispatch(receiveTransactionErrors(resBody.errors));
    }
  }
};

export const fetchUserTransactions = (id) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/transactions/user/${id}`);
    const transactions = await res.json();
    dispatch(receiveUserTransactions(transactions));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveTransactionErrors(resBody.errors));
    }
  }
};

export const composeTransaction = (data) => async (dispatch) => {
  try {
    const res = await jwtFetch("/api/transactions/", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const transaction = await res.json();
    dispatch(receiveNewTransaction(transaction));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveTransactionErrors(resBody.errors));
    }
  }
};

const nullErrors = null;

export const transactionErrorsReducer = (state = nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return action.errors;
    case RECEIVE_NEW_TRANSACTION:
    case CLEAR_TRANSACTION_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

const transactionsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return { ...state, all: action.transactions, new: undefined };
    case RECEIVE_USER_TRANSACTIONS:
      return { ...state, user: action.transactions, new: undefined };
    case RECEIVE_NEW_TRANSACTION:
      return { ...state, new: action.transaction };
    case RECEIVE_USER_LOGOUT:
      return { ...state, user: {}, new: undefined };
    default:
      return state;
  }
};

export default transactionsReducer;
