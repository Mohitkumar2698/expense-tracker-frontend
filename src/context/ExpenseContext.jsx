import { createContext, useReducer } from "react";

const ExpenseContext = createContext();

const initialState = {
  transactions: [
    {
      id: "1",
      amount: 500,
      category: "salary",
      date: "2024-06-01",
      note: "Initial deposit",
      type: "income",
    },
    {
      id: "2",
      amount: 200,
      category: "food",
      date: "2024-06-02",
      note: "Groceries",
      type: "expense",
    },
    {
      id: "3",
      amount: 150,
      category: "shopping",
      date: "2024-06-03",
      note: "Clothes",
      type: "expense",
    },
    {
      id: "4",
      amount: 300,
      category: "vehicle",
      date: "2024-06-04",
      note: "Fuel",
      type: "expense",
    },
    {
      id: "5",
      amount: 1000,
      category: "salary",
      date: "2024-06-05",
      note: "Freelance project",
      type: "income",
    },
  ],
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
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };
