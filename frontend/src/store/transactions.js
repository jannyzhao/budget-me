import jwtFetch from "./jwt";
import { RECEIVE_USER_LOGOUT } from "./session";

const RECEIVE_USER_TRANSACTIONS = "transactions/RECEIVE_USER_TRANSACTIONS";
const RECEIVE_NEW_TRANSACTION = "transactions/RECEIVE_NEW_TRANSACTION";
const RECEIVE_TRANSACTION_ERRORS = "transactions/RECEIVE_TRANSACTION_ERRORS";
const CLEAR_TRANSACTION_ERRORS = "transactions/CLEAR_TRANSACTION_ERRORS";
const REMOVE_TRANSACTION = "transactions/REMOVE_TRANSACTION";
const RECEIVE_TRANSACTION_UPDATE = "transactions/RECEIVE_TRANSACTION_UPDATE";

const receiveUserTransactions = ({ transactions, calculations }) => ({
  type: RECEIVE_USER_TRANSACTIONS,
  payload: { transactions, calculations },
});

const receiveNewTransaction = (transaction) => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction,
});

const receiveTransactionErrors = (errors) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors,
});

const removeTransaction = (transactionId) => ({
  type: REMOVE_TRANSACTION,
  transactionId,
});

const receiveTransactionUpdate = (updatedTransaction) => ({
  type: RECEIVE_TRANSACTION_UPDATE,
  updatedTransaction,
});

export const clearTransactionErrors = (errors) => ({
  type: CLEAR_TRANSACTION_ERRORS,
  errors,
});

export const fetchUserTransactions = (id, year, month) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/transactions/user/${id}/${year}/${month}`);
    const json = await res.json();
    dispatch(receiveUserTransactions(json));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveTransactionErrors(resBody.errors));
    }
  }
};

export const composeTransaction = (data) => async (dispatch) => {
  try {
    const res = await jwtFetch("/api/transactions", {
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

export const deleteTransaction = (transactionId) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/transactions/${transactionId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(removeTransaction(transactionId));
    }
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveTransactionErrors(resBody.errors));
    }
  }
};

export const updateTransaction = (transaction) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/transactions/${transaction._id}`, {
      method: "PATCH",
      body: JSON.stringify(transaction),
    });
    if (res.ok) {
      const updatedTransaction = await res.json();
      dispatch(receiveTransactionUpdate(updatedTransaction));
    }
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

const defaultUser = { transactions: [], calculations: {} };
const transactionsReducer = (
  state = { all: {}, user: defaultUser, new: undefined },
  action
) => {
  switch (action.type) {
    case RECEIVE_USER_TRANSACTIONS:
      return {
        ...state,
        user: {
          transactions: action.payload.transactions,
          calculations: action.payload.calculations,
        },
        new: undefined,
      };
    case RECEIVE_NEW_TRANSACTION:
      return {
        ...state,
        user: {
          transactions: [action.transaction, ...state.user.transactions],
          calculations: state.user.calculations,
        },
        new: action.transaction,
      };
    case RECEIVE_TRANSACTION_UPDATE:
      const updatedTransactions = state.user.transactions.map((t) =>
        t._id === action.updatedTransaction._id ? action.updatedTransaction : t
      );
      return {
        ...state,
        user: {
          transactions: updatedTransactions,
          calculations: state.user.calculations,
        },
      };
    case REMOVE_TRANSACTION:
      const updatedUserTransactions = state.user.transactions.filter(
        (transaction) => transaction._id !== action.transactionId
      );
      return {
        ...state,
        user: {
          transactions: updatedUserTransactions,
          calculations: state.user.calculations,
        },
      };
    case RECEIVE_USER_LOGOUT:
      return { ...state, user: {}, new: undefined };
    default:
      return state;
  }
};

export default transactionsReducer;
