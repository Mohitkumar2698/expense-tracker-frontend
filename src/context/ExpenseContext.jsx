import { createContext, useReducer } from "react";
import getMonth from "../utils/getMonth";

const ExpenseContext = createContext();

const initialState = {
  transactions: [
    {
      id: "1",
      amount: 500,
      category: "Salary",
      date: "2024-01-01",
      note: "Initial deposit",
      type: "income",
    },
    {
      id: "2",
      amount: 200,
      category: "Food",
      date: "2024-02-02",
      note: "Groceries",
      type: "expense",
    },
    {
      id: "3",
      amount: 150,
      category: "Shopping",
      date: "2024-01-03",
      note: "Clothes",
      type: "expense",
    },
    {
      id: "4",
      amount: 300,
      category: "Vehicle",
      date: "2024-10-04",
      note: "Fuel",
      type: "expense",
    },
    {
      id: "5",
      amount: 1000,
      category: "Salary",
      date: "2024-12-05",
      note: "Freelance project",
      type: "income",
    },
  ],
  filterMonth: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.payload, id: crypto.randomUUID() },
        ],
      };
    case "remove":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (transaction) => transaction.id !== action.id
          ),
        ],
      };
    case "edit":
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id
            ? { ...transaction, ...action.payload }
            : transaction
        ),
      };

    case "filterByMonth":
      return {
        ...state,
        filterMonth: action.month === "" ? null : action.month,
      };
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredTransactions = state.filterMonth
    ? state.transactions.filter(
        (transaction) => transaction.date.split("-")[1] === state.filterMonth
      )
    : state.transactions;

  const IncomeChartData = filteredTransactions.map((transaction) => {
    const month = getMonth(transaction.date.split("-")[1]);
    const income = transaction.type === "income" ? transaction.amount : 0;
    return { month: month, income: income };
  });

  const ExpenseChartData = filteredTransactions.map((transaction) => {
    const month = getMonth(transaction.date.split("-")[1]);
    const expense = transaction.type === "expense" ? transaction.amount : 0;
    return { month: month, expense: expense };
  });

  return (
    <ExpenseContext.Provider
      value={{
        transactions: filteredTransactions,
        dispatch,
        IncomeChartData,
        ExpenseChartData,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };
